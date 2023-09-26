Tedee's Local API exposes resources that enable you to work with your devices. By calling relevant endpoint user is able, among others, to manipulate lock, get battery level or read it's details.  
This guide aims to help you to get started with Tedee's Local API.  

## What you need?

Starting working with the API doesn't require much prerequisites.  
You'll need:

* REST API client - [Postman](https://www.postman.com) - is a great example here

## Enabling Local API and authentication

Before you can use the API you must enable the Local API. This can be done using the mobile tedee app.  
Go to selected Bridge -> Settings -> Local API -> then toggle the switch button.  

![Enabling Local API in the mobile app](/overview/images/enable_api.png "Enabling Local API in the mobile app")  


Every request requires authentication token.  
The process of using/generating the authentication token is described in the dedicated section [How to: Authenticate](/#tag/Authenticate).  
  
Bare in mind there are **two types** of Authentication Token described in the above section:
1. Encrypted
2. Plain - which must be used for **development purposes only!**
  
Once you've got the access token you can use [Postman](https://www.postman.com) to make authenticated requests.  
To do this, open Postman and go to Authorization tab. 

![Authentication with Postman](/overview/images/postman_token.png "Authentication with Postman")  

In ``Type`` dropdown select **API Key** and in ``Value`` input field put your access token.  
From now on, our requests should be authenticated.

## REST API request

To interact with the Tedee Local API, you send HTTP requests that use a supported method: GET, POST, or DELETE. POST request body and server responses are sent in JSON payloads.

The path URL resource names and query parameters are case sensitive. Moreover, the values you assign, entity IDs, and other base64 encoded values are also case sensitive.

### Request message URI

All Tedee Local API requests use the following URL format:

``http://{bridge IP}/{version}/{resource}`` 

* **bridge IP** - The IP address of the Tedee Bridge in the local network. It can be obtained from the Local API settings screen in the mobile app:
![Bridge IP address](/overview/images/bridge_ip.png "Bridge IP address")
* **version** - we use [Overview: API versioning](/#tag/API-versioning) to deliver new functionalities more easily, keeping backwards compatibility
* **resource** - path to the resource you want to manipulate

### Request message headers

Some requests require additional meta data sent in the headers, which helps to process them correctly:

* **Content-Length** - is required for all POST and PUT requests
* **api_token** - is optional if the parameter is not present in the URL (as query parameter). It can be used for POST and PUT requests.

### Architecture

Tedee Local API is based on REST architecture. This implies that the application does not store any state.  
Hence, the client session can not be handled on the server (Bridge) side, every request must provide all the information needed.  
All requests that starts with ``/bridge/`` referes to Bridge resources. Requests starts with ``/lock/`` referes to Lock resources and ``callback`` to the webhooks/callback management.

### Example request

Let's get some information about our devices now.
Put this address ``http://192.168.1.25/v1.0/lock`` in the `url` input and click **Send**.

	GET /v1.0/lock?api_token=<<token>> HTTP/1.1

You should receive response with all your devices. For example:

	[
	    {
	        "type": 2,
	        "id": 35800,
	        "name": "Lock9A25",
	        "serialNumber": "19500203-000005",
	        "isConnected": 0,
	        "rssi": 0,
	        "deviceRevision": 3,
	        "version": "2.4.9961",
	        "state": 0,
	        "jammed": 0,
	        "batteryLevel": 255,
	        "isCharging": 0,
	        "deviceSettings": {
	            "autoLockEnabled": 0,
	            "autoLockDelay": 60,
	            "autoLockImplicitEnabled": 0,
	            "autoLockImplicitDelay": 5,
	            "pullSpringEnabled": 0,
	            "pullSpringDuration": 5,
	            "autoPullSpringEnabled": 0,
	            "postponedLockEnabled": 1,
	            "postponedLockDelay": 5,
	            "buttonLockEnabled": 1,
	            "buttonUnlockEnabled": 1
	        }
	    },
	    {
	        "type": 4,
	        "id": 38740,
	        "name": "GO-06B2",
	        "serialNumber": "22510401-000050",
	        "isConnected": 0,
	        "rssi": 0,
	        "deviceRevision": 3,
	        "version": "2.0.13321",
	        "state": 0,
	        "jammed": 0,
	        "batteryLevel": 255,
	        "isCharging": 0,
	        "deviceSettings": {
	            "autoLockEnabled": 0,
	            "autoLockDelay": 60,
	            "autoLockImplicitEnabled": 0,
	            "autoLockImplicitDelay": 5,
	            "pullSpringEnabled": 1,
	            "pullSpringDuration": 2,
	            "autoPullSpringEnabled": 0,
	            "postponedLockEnabled": 1,
	            "postponedLockDelay": 5,
	            "buttonLockEnabled": 1,
	            "buttonUnlockEnabled": 1
	        }
	    }
	]
	
## REST API Response

### Response HTTP code

Each response contains an HTTP code that informs about the status of the request processing.  
Tedee Local API uses standard [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)  

### Response message body

If and endpoint returns any data it is always in the JSON format. For example:

	{
	    "name": "My Bridge",
	    "currentTime": "2023-09-23T14:54:54.918Z",
	    "serialNumber": "19420103-000007",
	    "ssid": "PREDICA",
	    "isConnected": 1,
	    "softwareVersions": [
	        {
	            "softwareType": 0,
	            "version": "2.2.13357"
	        },
	        {
	            "softwareType": 1,
	            "version": "4.13.0.2"
	        }
	    ]
	}

### Response message headers

Here's a list of most important headers returned in Tedee Local API responses:

* **Content-Length** - size of the response body
* **Content-Type** - indicates the media type of the resource, ``application/json`` in all cases
* **Date** - includes date and time when the messages was sent
* **Server** - Server name, ``Tedee`` in all cases


### Example response

Below is an example response for the Bridge Info request:

* HTTP status code - ``200``
* Response body:

		{
		    "name": "My Bridge",
		    "currentTime": "2023-09-23T14:59:59.660Z",
		    "serialNumber": "19420103-000007",
		    "ssid": "PREDICA",
		    "isConnected": 1,
		    "softwareVersions": [
		        {
		            "softwareType": 0,
		            "version": "2.2.13357-dev"
		        },
		        {
		            "softwareType": 1,
		            "version": "4.13.0.2"
		        }
		    ]
		}

* Response headers:

		Server: Tedee
		Content-Type: application/json
		Content-Length: 237
		Date: Sat, 23 Sep 2023 14:59:59 GMT
		Access-Control-Allow-Methods: GET, POST, DELETE, PUT, PATCH, OPTIONS
		Access-Control-Allow-Headers: Content-Type, api_token
		Access-Control-Allow-Credentials: true
		Access-Control-Allow-Origin: *

		
## What's next?

Here's a list of example actions that you can do using the API:

* Get device details
* Read lock state
* Lock, unlock or pull spring

