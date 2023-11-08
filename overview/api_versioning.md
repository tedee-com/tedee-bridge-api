 ![](/assets/github-logo.svg "GitHub Logo") [Edit on Github](https://github.com/tedee-com/tedee-bridge-api/blob/master/overview/api_versioning.md)

Tedee Bridge API is versioned, which allows us to develop and provide new functionalities while keeping backwards compatibility. This ensures that even when a breaking change happens, other services will still be able to work with the API the same way they did.  


## Usage

Each request requires the version number to be provided in the url using this format.  
``http://{bridge IP}/{version}/{resource}``  
For example:  
``http://192.168.1.25/v1.0/lock``  

## Version supported features

To verify which versions provide the feature that you want to utilize, we recommend to visit the **Bridge API Swagger documentation** which is available directly from your Tedee Bridge, simply by entering local IP address (of the Bridge) or using the "Try it now" button in the mobile app.

![Bridge API Swagger documentation](/overview/images/local_swagger.png "Bridge API Swagger documentation")  
  
You should be able to select a version on the left side and check if the desired endpoint is available and how the request body should look like.

### NOTE!
We recommend to upgrade to the latest available version of the API as soon as possible. We do not guarantee how long older versions will be available.

