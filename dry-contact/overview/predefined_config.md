## Impuls mode 
IN1 - Unlocks on falling edge of pulse  
IN2 - Locks on falling edge of pulse  
OUT1 - Indicates "locked" position  
OUT2 - Indicates alert: low battery or lock jammed  

```json
{ 
  "RULES":[ 
    {"T":["IN_1"], "C":[{"IN_1":"IMPULSE"}], "A":[{"LOCK":"OPEN"}]}, 
    {"T":["IN_2"], "C":[{"IN_2":"IMPULSE"}], "A":[{"LOCK":"CLOSE"}]}, 
    {"T":["STATE"], "C":[{"STATE":["OPEN","PARTIALLY_OPEN","PULL_SPRING"]}], "A":[{"OUT_1":0}]}, 
    {"T":["STATE"], "C":[{"STATE":["CLOSED"]}], "A":[{"OUT_1":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["JAMMED","BATTERY_LOW"]}], "A":[{"OUT_2":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["NOT_JAMMED"]},{"STATUS":["BATTERY_OK"]}], "A":[{"OUT_2":0}]} 
  ], 
  "VER":1 
} 
```

## Automatic door mode mode 
IN1 - Unlocks on signal's rising edge  
IN2 - Locks on signal's rising edge after a 1-second delay  
OUT1 - Indicates "pull-spring"  
OUT2 - Indicates alert: low battery or lock jammed  

```json
{ 
  "RULES":[ 
    {"T":["IN_1"], "C":[{"IN_1":"L->H"}], "A":[{"LOCK":"OPEN"}]}, 
    {"T":["IN_2"], "C":[{"IN_2":"L->H"}], "A":[{"DELAY":1000},{"LOCK":"CLOSE"}]}, 
    {"T":["STATE"], "C":[{"STATE":["PULL_SPRING"]}], "A":[{"OUT_1":1}]}, 
    {"T":["STATE"], "C":[{"STATE":["OPEN", "PARTIALLY_OPEN", "CLOSED"]}], "A":[{"OUT_1":0}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["JAMMED","BATTERY_LOW"]}], "A":[{"OUT_2":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["NOT_JAMMED"]},{"STATUS":["BATTERY_OK"]}], "A":[{"OUT_2":0}]} 
  ], 
  "VER":1 
} 
```

## Toggle switch mode mode 
IN1 - Unlocks on falling edge of pulse when locked; locks when "unlocked" or "semi-locked"  
OUT1 - Indicates "locked" position  
OUT2 - Indicates alert: low battery or lock jammed  

```json
{ 
  "RULES":[ 
    {"T":["IN_1"], "C":[{"IN_1":"IMPULSE"},{"STATE":["CLOSED"]}], "A":[{"LOCK":"OPEN"}]}, 
    {"T":["IN_1"], "C":[{"IN_1":"IMPULSE"},{"STATE":["OPEN","PARTIALLY_OPEN"]}], "A":[{"LOCK":"CLOSE"}]}, 
    {"T":["STATE"], "C":[{"STATE":["OPEN","PARTIALLY_OPEN","PULL_SPRING"]}], "A":[{"OUT_1":0}]}, 
    {"T":["STATE"], "C":[{"STATE":["CLOSED"]}], "A":[{"OUT_1":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["JAMMED","BATTERY_LOW"]}], "A":[{"OUT_2":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["NOT_JAMMED"]},{"STATUS":["BATTERY_OK"]}], "A":[{"OUT_2":0}]} 
  ], 
  "VER":1 
} 
```

## Disarming/Arming the alarm mode 
IN1 - Unlocks on falling edge of pulse  
IN2 - Locks on falling edge of pulse (shorter than 3 seconds), or locks after a 10-second delay and arms alarm with "push and hold" for 3 seconds  
OUT1 - Sends a 3-second impulse when unlocked via app (to disarm the alarm)  
OUT2 - Sends a 3-second impulse after the IN2 is activated for 3 seconds (to arm the alarm)  

```json
{ 
  "RULES":[ 
    {"T":["IN_1"], "C":[{"IN_1":"IMPULSE"},{"STATE":["CLOSED"]}], "A":[{"LOCK":"OPEN"}]}, 
    {"T":["IN_2"], "C":[{"IN_2":{"SIGNAL":"IMPULSE","COUNT":1}}, {"STATE":["OPEN","PARTIALLY_OPEN"]}], "A":[{"LOCK":"CLOSE"}]}, 
    {"T":["IN_2"], "C":[{"IN_2":{"SIGNAL":"HOLD","DURATION":3000}}, {"STATE":["OPEN","PARTIALLY_OPEN"]}], "A":[{"OUT_2":1},{"DELAY":3000, "CONDITIONS":"SKIP"},{"OUT_2":0},{"DELAY":7000},{"LOCK":"CLOSE"}]}, 
    {"T":["STATE"], "C":[{"SOURCE":["APP"]},{"SETTINGS":["IS_PULL_SPRING_OFF"]},{"STATE":["OPEN"]}], "A":[{"OUT_1":1},{"DELAY":3000, "CONDITIONS":"SKIP"},{"OUT_1":0}]}, 
    {"T":["STATE"], "C":[{"SOURCE":["APP"]},{"STATE":["PULL_SPRING"]}], "A":[{"OUT_1":1},{"DELAY":3000, "CONDITIONS":"SKIP"},{"OUT_1":0}]} 
  ], 
  "VER":1, 
  "SETUP":{"IN_2":{"MAX_IMPULSE_LEN":5000, "HOLD_PERIOD":1000}} 
} 
```

## Bistable mode

IN1 - Unlocks at signal level "high"  
IN2 - Locks at signal level "high"  
OUT1 - Indicates "locked" position  
OUT2 - Indicates alert: low battery or lock jammed  
Note: Changing the lock state from a source other than Dry Contact overrides the signal level until the signal changes again.  

```json
{ 
  "RULES":[ 
    {"T":["IN_1"], "C":[{"IN_2":"L"},{"IN_1":"L->H"},{"STATE":["CLOSED"]}], "A":[{"LOCK":"OPEN"}]}, 
    {"T":["IN_2"], "C":[{"IN_2":"L->H"},{"STATE":["OPEN","PARTIALLY_OPEN"]}], "A":[{"LOCK":"CLOSE"}]}, 
    {"T":["STATE"], "C":[{"STATE":["OPEN","PARTIALLY_OPEN","PULL_SPRING"]}], "A":[{"OUT_1":0}]}, 
    {"T":["STATE"], "C":[{"STATE":["CLOSED"]}], "A":[{"OUT_1":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["JAMMED","BATTERY_LOW"]}], "A":[{"OUT_2":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["NOT_JAMMED"]},{"STATUS":["BATTERY_OK"]}], "A":[{"OUT_2":0}]} 
  ], 
  "VER":1 
} 
```

## Bistable mode with signal priority 
IN1 - Unlocks at signal level "high"  
IN2 - Locks at signal level "high"  
OUT1 - Indicates "locked" position  
OUT2 - Indicates alert: low battery or lock jammed  
Note: After 5 seconds, the signal level overrides any lock state changes from sources other than Dry Contact.  

```json
{ 
  "RULES":[ 
    {"T":["IN_1"], "C":[{"IN_2":"L"},{"IN_1":"L->H"},{"STATE":["CLOSED"]}], "A":[{"LOCK":"OPEN"}]}, 
    {"T":["IN_2"], "C":[{"IN_2":"L->H"},{"STATE":["OPEN","PARTIALLY_OPEN"]}], "A":[{"LOCK":"CLOSE"}]}, 
    {"T":["STATE"], "C":[{"STATE":["OPEN","PARTIALLY_OPEN","PULL_SPRING"]}], "A":[{"OUT_1":0}]}, 
    {"T":["STATE"], "C":[{"STATE":["CLOSED"]}], "A":[{"OUT_1":1}]}, 
    {"T":["STATE"], "C":[{"IN_2":"L"},{"IN_1":"H"},{"STATE":["CLOSED","PARTIALLY_OPEN"]}], "A":[{"DELAY":5000},{"LOCK":"OPEN", "PARAM":"WITHOUT_PULL"}]}, 
    {"T":["STATE"], "C":[{"IN_2":"H"},{"STATE":["OPEN","PARTIALLY_OPEN"]}], "A":[{"DELAY":5000},{"LOCK":"CLOSE"}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["JAMMED","BATTERY_LOW"]}], "A":[{"OUT_2":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["NOT_JAMMED"]},{"STATUS":["BATTERY_OK"]}], "A":[{"OUT_2":0}]} 
  ], 
  "VER":1 
} 
```

## Bistable mode - IN1 only 
IN1 - Unlocks on level "high" when locked; locks on level "low" when "unlocked" or "semi-locked"  
OUT1 - Indicates "locked" position  
OUT2 - Indicates alert: low battery or lock jammed  
   
Note: Changing the lock state from a source other than Dry Contact overrides the signal level until the signal changes again.  

```json
{ 
  "RULES":[ 
    {"T":["IN_1"], "C":[{"IN_1":"L->H"},{"STATE":["CLOSED"]}], "A":[{"LOCK":"OPEN"}]}, 
    {"T":["IN_1"], "C":[{"IN_1":"H->L"},{"STATE":["OPEN","PARTIALLY_OPEN"]}], "A":[{"LOCK":"CLOSE"}]}, 
    {"T":["IN_1"], "C":[{"STATE":["OPENING","CLOSING","PULLING","UNPULLING","PULL_SPRING"]}], "A":[{"RETRY":1000, "ATTEMPTS":10}]}, 
    {"T":["STATE"], "C":[{"STATE":["OPEN","PARTIALLY_OPEN","PULL_SPRING"]}], "A":[{"OUT_1":0}]}, 
    {"T":["STATE"], "C":[{"STATE":["CLOSED"]}], "A":[{"OUT_1":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["JAMMED","BATTERY_LOW"]}], "A":[{"OUT_2":1}]}, 
    {"T":["STATE","STATUS"], "C":[{"STATUS":["NOT_JAMMED"]},{"STATUS":["BATTERY_OK"]}], "A":[{"OUT_2":0}]} 
  ], 
  "VER":1 
}
```
