 ![](/bridge-api/assets/github-logo.svg "GitHub Logo") [Edit on Github](https://github.com/tedee-com/tedee-bridge-api/blob/master/webhooks/events.md)

All webhook request bodies configured as "POST" in the method name, has very similar JSON structure which consists of:
- **event** - an unique event name
- **timestamp** - the date and time of the event in the UTC format
- **data** - the data object specific to the event type/name

For webhooks configured as "GET" in the method name, there are no content bodies and all values are passed as "query string" parameters.
For webhooks configured as "GET+NO_PARAMS" in the method name, there are no content bodies and all values are passed in the path delimited by "/" character. No "?" or "&" characters will be used in the URL request.

See the list of available webhook events and examples below.
  

## Backend connection changed

Occures when Tedee Bridge gets or looses connection to Tedee Cloud.

**Request body for POST method**

	{
	  "event": "backend-connection-changed",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "isConnected": 1
	  }
	}

**Request for GET method**

	<<YOUR_WEBHOOK_URL>>?event=backend-connection-changed&timestamp=2023-07-25T14:41:48.825Z&isConnected=1
	
**Request for GET+NO_PARAMS method**

	<<YOUR_WEBHOOK_URL>>/event=backend-connection-changed/timestamp=2023-07-25T14:41:48.825Z/isConnected=1

The ``isConnected`` field may have the following values:
- 0 - disconnected
- 1 - connected

## Device connection changed

Occures when Tedee Lock gets or looses connection to the Bridge.

**Request body for POST method**

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

**Request for GET method**

	<<YOUR_WEBHOOK_URL>>?event=device-connection-changed&timestamp=2023-07-25T14:41:48.825Z&deviceType=2&deviceId=33819&serialNumber=19420103-000006&isConnected=1

**Request for GET+NO_PARAMS method**

	<<YOUR_WEBHOOK_URL>>/event=device-connection-changed/timestamp=2023-07-25T14:41:48.825Z/deviceType=2/deviceId=33819/serialNumber=19420103-000006/isConnected=1
	
The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 
 
The ``isConnected`` field may have the following values:
- 0 - disconnected
- 1 - connected

## Device settings changed

Occures when settings has changed for Tedee Lock.

**Request body for POST method**

	{
	  "event": "device-settings-changed",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006"
	  }
	}
	
**Request for GET method**

	<<YOUR_WEBHOOK_URL>>?event=device-settings-changed&timestamp=2023-07-25T14:41:48.825Z&deviceType=2&deviceId=33819&serialNumber=19420103-000006

**Request for GET+NO_PARAMS method**

	<<YOUR_WEBHOOK_URL>>/event=device-settings-changed/timestamp=2023-07-25T14:41:48.825Z/deviceType=2/deviceId=33819/serialNumber=19420103-000006

The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 


## Lock status changed

Occures when Tedee Lock status has changed

**Request body for POST method**

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
	
**Request for GET method**

	<<YOUR_WEBHOOK_URL>>?event=lock-status-changed&timestamp=2023-07-25T14:41:48.825Z&deviceType=2&deviceId=33819&serialNumber=19420103-000006&state=6&jammed=0

**Request for GET+NO_PARAMS method**

	<<YOUR_WEBHOOK_URL>>/event=lock-status-changed/timestamp=2023-07-25T14:41:48.825Z/deviceType=2/deviceId=33819/serialNumber=19420103-000006/state=6/jammed=0

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

**Request body for POST method**

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

**Request for GET method**

	<<YOUR_WEBHOOK_URL>>?event=device-battery-level-changed&timestamp=2023-07-25T14:41:48.825Z&deviceType=2&deviceId=33819&serialNumber=19420103-000006&batteryLevel=90

**Request for GET+NO_PARAMS method**

	<<YOUR_WEBHOOK_URL>>/event=device-battery-level-changed/timestamp=2023-07-25T14:41:48.825Z/deviceType=2/deviceId=33819/serialNumber=19420103-000006/batteryLevel=90
	
The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 

The ``batteryLevel`` field may have the following values:
- 0-100 battery level in percentage
- 255 if battery level is not known


## Device battery start charging

Occures when Tedee Lock (PRO) starts charging

**Request body for POST method**

	{
	  "event": "device-battery-start-charging",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006"
	  }
	}
	
**Request for GET method**

	<<YOUR_WEBHOOK_URL>>?event=device-battery-start-charging&timestamp=2023-07-25T14:41:48.825Z&deviceType=2&deviceId=33819&serialNumber=19420103-000006
	
**Request for GET+NO_PARAMS method**

	<<YOUR_WEBHOOK_URL>>/event=device-battery-start-charging/timestamp=2023-07-25T14:41:48.825Z/deviceType=2/deviceId=33819/serialNumber=19420103-000006

The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 

## Device battery stop charging

Occures when Tedee Lock (PRO) stops charging

**Request body for POST method**

	{
	  "event": "device-battery-stop-charging",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006"
	  }
	}

**Request for GET method**

	<<YOUR_WEBHOOK_URL>>?event=device-battery-stop-charging&timestamp=2023-07-25T14:41:48.825Z&deviceType=2&deviceId=33819&serialNumber=19420103-000006

**Request for GET+NO_PARAMS method**

	<<YOUR_WEBHOOK_URL>>/event=device-battery-stop-charging/timestamp=2023-07-25T14:41:48.825Z/deviceType=2/deviceId=33819/serialNumber=19420103-000006

The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 

## Device battery fully charged

Occures when Tedee Lock (PRO) is fully charged

**Request body for POST method**

	{
	  "event": "device-battery-fully-charged",
	  "timestamp": "2023-07-25T14:41:48.825Z",
	  "data": {
	    "deviceType": 2,
	    "deviceId": 33819,
	    "serialNumber": "19420103-000006"
	  }
	}

**Request for GET method**

	<<YOUR_WEBHOOK_URL>>?event=device-battery-fully-charged&timestamp=2023-07-25T14:41:48.825Z&deviceType=2&deviceId=33819&serialNumber=19420103-000006

**Request for GET+NO_PARAMS method**

	<<YOUR_WEBHOOK_URL>>/event=device-battery-fully-charged/timestamp=2023-07-25T14:41:48.825Z/deviceType=2/deviceId=33819/serialNumber=19420103-000006

The ``deviceType`` field may have the following values:
- 2 for Lock PRO 
- 4 for Lock GO. 
