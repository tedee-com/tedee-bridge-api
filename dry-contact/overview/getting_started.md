Dry Contact script language structure, derived from JSON, allows configuration of inputs and outputs in the following format:

```json
{
	"RULES":[
		{"T":["TRIGGERS”], "C":[{"CONDITIONS"}], "A":[{"ACTIONS"}]},
	],
	"VER":1
}
```

- **TRIGGERS:** Triggers from the Dry Contact inputs.
- **CONDITIONS:** Conditions to be met to call the actions.
- **ACTIONS:** Actions to perform.



## TRIGGERS

**"IN_1"** - the trigger is a change in signal level at the IN_1 input (from low to high or from high to low)  
**"IN_2"** - the trigger is a change in signal level at the IN_2 input (from low to high or from high to low)  
**"STATE"** - the trigger is receiving the GET_STATE command or a LOCK_STATUS_CHANGE notification over Bluetooth from the tedee lock paired with the Dry Contact (see the API documentation for the reference)  
**"STATUS"** - the trigger is receiving the GET_BATTERY command, a BATTERY, BATTERY_FULLY_CHARGED notification over Bluetooth, or a change in the Lock's connection status: CONNECTED, DISCONNECTED (see the API documentation for the reference)  


## CONDITIONS

(TRIGGERS FROM THE DRY CONTACT INPUTS)  
The following applies when the "trigger" is input IN_1 or IN_2, even though we use "IN_1" in the description below:

- **{"IN_1":"L->H"}** - the condition is met when the input changes from low to high
- **{"IN_1":"H->L"}** - the condition is met when the input changes from high to low
- **{"IN_1":"IMPULSE"}** - the condition is met when the input transitions from low to high and back to low (on the falling edge)
- **{"IN_1":{"SIGNAL":"IMPULSE","COUNT":3}}** - the condition is met when the input transitions from low -> high -> low (3 times)
- **{"IN_1":{"SIGNAL":"HOLD","DURATION":2000}}** - the condition is met when the input changes from low to high and remains high for 2 seconds


**Note:** The DURATION parameter can be increased by a value of 500ms up to a maximum of 15,000ms. Note: A "HOLD" signal type will occur ONLY if the "HOLD_PERIOD" parameter is set!  


(TRIGGERS FROM THE LOCK)  

The following applies when the "trigger" is NOT input IN_1 or IN_2 (e.g., a lock state change) but there is a need to make the action execution dependent on the current state of input IN_1 or IN_2.
- **{"IN_1":"L"}** or **{"IN_1":0}** - the condition is met when the input is in a low state
- **{"IN_1":"H"}** or **{"IN_1":1}** - the condition is met when the input is in a high state

STATE
- **{"STATE":["OPEN","PARTIALLY_OPEN"]}** - the condition is met when the lock state is either OPEN or PARTIALLY_OPEN List of states: UNCALIBRATED, CALIBRATION, OPEN, PARTIALLY_OPEN, OPENING, CLOSING, CLOSED, PULL_SPRING, PULLING, UNPULLING, UPDATING, UNKNOWN, DISCONNECTED

STATUS
- **{"STATUS":["JAMMED","BATTERY_LOW"]}** - the condition is met when the lock status is either jammed or reports low battery List of statuses: DISCONNECTED, CONNECTED, BATTERY_LOW, BATTERY_OK, JAMMED, NOT_JAMMED

SOURCE
- **{"SOURCE":["MANUAL","BUTTON","APP"]}** - the condition is met when the lock is unlocked manually “MANUAL”, via “BUTTON”, or from the “APP” List of open/close methods: MANUAL, BUTTON, APP, AUTO_UNLOCK, AUTO_LOCK, HOMEKIT, KEYPAD, ACCESS_LINK, LOCAL_API, FINGERPRINT_MODULE, SYSTEM

SETTINGS
- **{"SETTINGS":["IS_PULL_SPRING_ON"]}** - the condition is met when the lock has the pull spring feature enabled List of available lock configuration parameters:
	- **IS_PULL_SPRING_ON** – "pull spring" is enabled
	- **IS_PULL_SPRING_OFF** – "pull spring" is disabled
	- **IS_AUTO_PULL_SPRING_ON** - both "pull spring" and "auto pull spring" are enabled
	- **IS_AUTO_PULL_SPRING_OFF** - "pull spring" is enabled, but "auto pull spring" is disabled
	- **IS_AUTO_LOCK_ON** - "auto locking" is enabled
	- **IS_AUTO_LOCK_OFF** - "auto locking" is disabled
	- **IS_BUTTON_LOCK_ON** – "button locking" is enabled
	- **IS_BUTTON_LOCK_OFF** – "button locking" is disabled
	- **IS_BUTTON_UNLOCK_ON** – "button unlocking" is enabled
	- **IS_BUTTON_UNLOCK_OFF** – "button unlocking" is disabled

	
## ACTIONS

DELAY
- **{"DELAY":1000}** - execute the “wait” action for 1000ms

LOCK OPEN
- **{"LOCK":"OPEN"}** - execute the “unlock” action by sending the appropriate BLE API command to the lock
- **{"LOCK":"OPEN", "PARAM":"WITHOUT_PULL"}** - as above, but specifying the opening method as “without pull spring” Available parameter values: FORCE, WITHOUT_PULL, UNLOCK_OR_PULL

LOCK CLOSE
- **{"LOCK":"CLOSE"}** - execute the “lock” command by sending the appropriate BLE API command to the lock
- **{"LOCK":"CLOSE", "PARAM":"FORCE"}** - as above, but specifying the closing method as FORCE locking (without checking the “locked” calibration point, to the end of the lock move, until the lock gets overloaded and stops. Available parameter value: FORCE

OUT_1 and OUT_2
- **{"OUT_1":"CLOSED"}** - sets output OUT_1 to closed state
- **{"OUT_1":1}** - same as above
- **{"OUT_2":"OPEN"}** - sets output OUT_2 to open state
- **{"OUT_1":0}** - same as above

RETRY
- **{"RETRY":1000, "ATTEMPTS":5}** - optional "ATTEMPTS" parameter defines the number of repetitions (default is 15). This command is useful when none of the rules match (e.g., the lock is in motion), but it is necessary to execute an action, such as "adjusting" to the current input state.


## SETUP

Configuration of Inputs and Outputs
- **{"IN_1":{"MAX_IMPULSE_LEN":1000}}** - Allows setting the maximum impulse length for counting. If the given signal exceeds MAX_IMPULSE_LEN, the impulse will NOT be counted (event will return COUNT = 0). Default value is 5000ms.
- **{"IN_1":{"NEXT_IMPULSE":500}}** - Allows setting the maximum time for the next impulse to be counted. The next impulse must occur within this time to be counted. Default value is 1000ms.
- **{"IN_1":{"HOLD_PERIOD":500}}** - Allows setting the time for “HOLD” events. The given value must be a multiple of 100ms. Note: A value of 0ms (default) DISABLES the "HOLD" signal. Also, see the example for: “SIGNAL”:”HOLD” in the CONDITIONS section above.
- **{"LED":{"MODE":"DC_STATE"}}** - Allows setting the LED indication mode via the "MODE" parameter Available values:
	- **OFF** – LED is off
	- **LOCK_STATE** – LED indicates lock state (green color – lock open)
	- **DC_STATE** – LED indicates module state (blue color – module processing commands)
- **{"OUT_1":{"DEFAULT_STATE":1}}** - Allows setting the default output state after device reset. Note: At the final startup phase, the “STATUS” trigger is activated, which may find a matching rule and set the output states according to the described actions.
