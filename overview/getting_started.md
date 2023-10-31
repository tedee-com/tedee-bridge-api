Welcome to the Tedee Bridge API, specifically designed to operate within your local network. Here are some key points to get you started:

- **Local Network:** The API functions over your local network, allowing your integrations to communicate directly with the Tedee Bridge without requiring external internet access for the API calls.

- **Initial Setup:** To get started, you'll need a Tedee Bridge connected to your local network. Importantly, the bridge must have internet access to obtain and periodically refresh an access certificate for paired devices.

- **Device Pairing:** Make sure you have at least one Tedee Lock paired with the bridge to control it via the API.

- **Callbacks:** The Tedee Bridge API offers callbacks to keep your integration updated on device status changes or other important events.

- **Rate Limiting:** Be mindful of the rate at which you send requests; sending them too quickly can adversely affect performance. 1 request per second should be the max.

## Enabling Bridge API

Before you can use the API you must enable it on the Bridge using Tedee mobile application. Open Tedee app and go to selected Bridge -> Settings -> API -> then toggle the switch button.  

![Enabling Bridge API in the mobile app](/overview/images/enable_api.png "Enabling Bridge API in the mobile app")  

Available options:

- **Encrypted Token:** Allows you to toggle between secure and insecure authentication methods. For more details, refer to the [Authentication](/#tag/Authenticate) section.
  
- **Token:** This is the actual token that must be included in every API request for authentication, functioning similarly to a password, so keep it secure.

- **IP Address:** Indicates the local network address of the Tedee Bridge where the API will be accessible.

- **Port:** Specifies the port number on the Tedee Bridge where the API can be accessed.

- **Try it Now:** Opens the Swagger page for the Tedee Bridge, allowing you to test the API directly from your web browser.

## REST API request

To interact with the Tedee Bridge API, you send HTTP requests that use a supported method: GET, POST, or DELETE. POST request body and server responses are sent in JSON payloads.

The path URL resource names and query parameters are case sensitive. Moreover, the values you assign, entity IDs, and other base64 encoded values are also case sensitive.

### Request message URI

All requests to Tedee Bridge API use the following URL format:

``http://{bridge IP}/{version}/{resource}`` 

* **bridge IP** - The IP address of the Tedee Bridge in the local network. It can be obtained from the mobile app
* **version** - we use [Overview: API versioning](/#tag/API-versioning) to deliver new functionalities more easily, keeping backwards compatibility
* **resource** - path to the resource you want to manipulate

### Request message headers

Some requests require additional meta data sent in the headers, which helps to process them correctly:

* **Content-Length** - is required for all POST and PUT requests
* **api_token** - is optional if the parameter is not present in the URL (as query parameter). It can be used for POST and PUT requests.

### Architecture

Tedee Bridge API is based on REST architecture. This implies that the application does not store any state.  
Hence, the client session can not be handled on the server (Bridge) side, every request must provide all the information needed.  

### Example request

Let's get some information about our Bridge now.
Put this address ``http://192.168.1.25/v1.0/bridge`` in your browser `url` and send it.

	GET /v1.0/bridge?api_token=<<token>> HTTP/1.1
	
## REST API Response

Each response contains an HTTP code that informs about the status of the request processing and optional body in **JSON** format.

### Response message headers

Here's a list of most important headers returned in Tedee Bridge API responses:

* **Content-Length** - size of the response body
* **Content-Type** - indicates the media type of the resource, ``application/json`` in all cases
* **Date** - includes date and time when the messages was sent
* **Server** - Server name, ``Tedee`` in all cases
		
## What's next?

Follow these tutorials:

* [How to: Authenticate](/#tag/Authenticate)
* [How to: Get and sync locks](/#tag/Get-and-sync-locks)
* [How to: Operate locks](/#tag/Operate-locks)

Check out other ways to integrate:
* [Tedee Cloud API](https://tedee-tedee-api-doc.readthedocs-hosted.com/)
* [Tedee Bluetooth API](https://tedee-tedee-lock-ble-api-doc.readthedocs-hosted.com/)

Use [community forum](https://tedee.freshdesk.com/en/support/discussions) if you need help
