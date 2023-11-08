 ![](/assets/github-logo.svg "GitHub Logo") [Edit on Github](https://github.com/tedee-com/tedee-bridge-api/blob/master/webhooks/events.md)

All webhook request bodies has very similar JSON structure which consists of:
- **event** - an unique event name
- **timestamp** - the date and time of the event in the UTC format
- **data** - the data object specific to the event type/name

See the list of available webhook events below.
  

## Backend connection changed

Occures when Tedee Bridge gets or looses connection to Tedee Cloud.

**Request body**

	{
	  "event": "backend-connection-changed",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "isConnected": 1
	  }
	}
	
The ``isConnected`` field may have the following values:
- 0 - disconnected
- 1 - connected



## Device connection changed

Occures when Tedee Lock gets or looses connection to the Bridge.

**Request body**

	{
	  "event": "device-connection-changed",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006",
	    "isConnected": 1
	  }
	}

The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 
 
The ``isConnected`` field may have the following values:
- 0 - disconnected
- 1 - connected

## Device settings changed

Occures when settings has changed for Tedee Lock.

**Request body**

	{
	  "event": "device-settings-changed",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006"
	  }
	}
	
The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 


## Lock status changed

Occures when Tedee Lock status has changed

**Request body**

	{
	  "event": "lock-status-changed",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006",
	    "state": 6,
	    "jammed": 0
	  }
	}
	
The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 

The ``state`` field may have the following values:
- 0 - uncalibrated
- 1 - calibration
- 2 - open
- 3 - partially_open
- 4 - opening
- 5 - closing
- 6 - closed
- 7 - pull_spring
- 8 - pulling
- 9 - unknown
- 255 - unpulling

The ``jammed`` field may have the following values:
- 0 - not jammed
- 1 - jammed

## Device battery level changed

Occures when Tedee Lock battery level changes

**Request body**

	{
	  "event": "device-battery-level-changed",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006",
	    "batteryLevel": 90
	  }
	}

The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 

The ``batteryLevel`` field may have the following values:
- 0-100 battery level in percentage
- 255 if battery level is not known


## Device battery start charging

Occures when Tedee Lock (PRO) starts charging

**Request body**

	{
	  "event": "device-battery-start-charging",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006"
	  }
	}
	
The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 

## Device battery stop charging

Occures when Tedee Lock (PRO) stops charging

**Request body**

	{
	  "event": "device-battery-stop-charging",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006"
	  }
	}

The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 

## Device battery fully charged

Occures when Tedee Lock (PRO) is fully charged

**Request body**

	{
	  "event": "device-battery-fully-charged",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006"
	  }
	}

The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 
