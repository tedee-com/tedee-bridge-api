See on our ![](/assets/github-logo.svg "GitHub Logo") [GitHub repository](https://github.com/tedee-com/tedee-bridge-api/blob/master/howtos/authenticate.md)

Every request requires authentication token.
The process of using/generating the authentication token is described below.  
  
Bare in mind there are **two types** of Authentication Tokens:
1. **Encrypted** - used as default
2. **Plain** - unsecured, which must be used <span style="color:red">**for development purposes only!**</span> and never in production environment.

The type of token used by the Bridge API can be selected via the mobile app:

![Selecting API Token type](/howtos/images/token_plain.png "Selecting API Token type")  

Depends on the selected type of API token, a relevant ``api_key`` value must be generated and passed as a query or header parameter.

## Encrypted Token 
For more information or to report issues, visit our [GitHub repository](https://github.com/your-repo-path).

This type of token provides sufficient security level to the system:
* every request (with a given ``api_key``) can be processed only once due to timestamp value embedded in the ``api_key`` value
* every request will have different ``api_key`` value, effectively, the entire request string will be different
* the internal token string will never be revealed

The ``api_key`` value needs to be calculated independently for every request, based on:
* ``token`` - taken from the Tedee app
* ``timestamp`` - a current date & time as a "big" integer value in milliseconds (also known as: epoch time)

The formula pattern to get the ``api_key`` value is:

	api_key = SHA256(token + timestamp) + timestamp

### For example:  
Let's say the ``token`` is: 
	
	BE9xnPnGfVUS
... and the current "epoch" time (``timestamp``) in milliseconds is:

	1691058833000


1. Concatenate the ``token`` and ``timestamp`` together:

		BE9xnPnGfVUS1691058833000

2. Calculate hash (SHA256) for the above string
	
		e59d9763edc6e59f2faccf9a769e5cf170d68439c3fd67afae5e3e72d0463a71
	
3. Append ``timestamp`` to the end:

		e59d9763edc6e59f2faccf9a769e5cf170d68439c3fd67afae5e3e72d0463a711691058833000

4. Done!  
The last string you received is your ``api_key`` value.

## Plain Token
This type of token **does not** provide sufficient security level to the system and can be used <span style="color:red">**for development purposes only!**</span>:
* the Bridge API token **will be revealed!**
* every request of the same kind will look the same and can be processed **multiple of times**
* malicious software or user can take control of the Locks by sniffing the traffic in the local network

The ``api_key`` value for this token type is just the token taken from Tedee app

### For example:  
Let's say the ``token`` is: 

	BE9xnPnGfVUS

...the ``api_key`` value is also

	BE9xnPnGfVUS


## Postman Automation
For testing purposes, [Postman](https://www.postman.com) can be configured to use both types of tokens (Encrypted and Plain) by adding several scripts and variables in the relevant places.  
Follow the steps described below if you want to do so.

1. Go to Environments -> Globals and add 3 variables:  

![Set Postman global variables](/howtos/images/postman_auto_globals.png "Set Postman global variables")
- **API_TOKEN** - set the current value of Tedee Bridge API ``token``. For example:

		BE9xnPnGfVUS

- **API_TOKEN_MODE** - set the current value as ``PLAIN`` or ``ENCRYPTED`` - depending on the mode you want to use. For example:

		ENCRYPTED

- **SECURE_TOKEN_SCRIPT** - set the current value with the script text:

		if (pm.globals.get("API_TOKEN_MODE")=="ENCRYPTED") {
		    var token = pm.globals.get("API_TOKEN");
		    var timestamp = pm.variables.replaceIn('{{$timestamp}}')+"000";
		    var hash = CryptoJS.SHA256(token+timestamp).toString();
		    pm.globals.set("API_KEY", hash+timestamp);
		    console.log("Set variable API_KEY: " + pm.globals.get("API_KEY") + " (original token: " + token + " timestamp: " + timestamp + " sha256: " + hash + ")");
		};
2. Go to a selected endpoint -> Pre-request script tab and enter the following line:
	![Set Pre-request script](/howtos/images/postman_auto_pre.png "Set Pre-request script")	

		eval(pm.globals.get('SECURE_TOKEN_SCRIPT'));
	
3. Go to a selected endpoint -> Authorization tab and enter "{{API_KEY}}" into the value text field as shown below:
	![Set api_key value](/howtos/images/postman_auto_auth.png "Set api_key value")	

4. Done.  
	Now you can send requests with encrypted token mode without the need of manual calculation every time!
	
### Note!
Bare in mind that every time you change the token type in Tedee app then you must change the **API_TOKEN_MODE** current value accordingly.