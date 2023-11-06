 ![](/assets/github-logo.svg "GitHub Logo") [Edit on Github](https://github.com/tedee-com/tedee-bridge-api/blob/master/webhooks/about_webhooks.md)

From an integration perspective, it is crucial to keep device information up to date.  
Webhook notifications solve this problem by automatically sending updates when changes happen. This eliminates the need to periodically send requests to the Tedee Bridge API to refresh devices. 
Tedee Bridge uses webhook notifications to send updates about important changes on the devices, for example, when the Lock status or Bridge connection has changed.  
  
Webhooks feature is designed for integrations having the ability to configure the URL address as well as custom HTTP headers sent with the request. 

**Note:**  
Remember that the lock must be paired with the bridge to track changes in real time and have the webhooks configured properly.  
  
Once the webhook for your integration is configured, the Tedee Bridge will send POST request to that URL when any change on the device connected to your Bridge will occur.  

Tedee Bridge sends request to all configured webhooks separately, for each device independently.  