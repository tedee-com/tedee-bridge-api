You must authenticate to make requests to the API.  
Tedee Bridge API uses 2 types of API tokens:

## Token type: plain
the token can be taken from the Tedee App -> Bridge Settings and copied directly to the value field below.  
**NOTE! Use this type of token for development purposes only!!!**  
An example token looks like this:

	BE9xnPnGfVUS

## Token type: secure
the token needs to be calculated for each request independantly based on the token taken from the Tedee App and the timestamp.

The calculation formula is as follows:  
1. Prepare the string that concatenates two factors: Token from the Tedee App and the timestamp (epoch time in milliseconds).  
Example: 
	
		BE9xnPnGfVUS1691058833000

2. Calculate hash (SHA256) from the prepared string.  
Example:
	
		e59d9763edc6e59f2faccf9a769e5cf170d68439c3fd67afae5e3e72d0463a71

3. Prepare another string that concatenates received hash and the timestamp (the same value used in hash calculation).  
Example:
	
		e59d9763edc6e59f2faccf9a769e5cf170d68439c3fd67afae5e3e72d0463a711691058833000

Use the calculated string as the ``api_token`` value.  
  
Please note that the token timestamp is validated by the Tedee Bridge and the value used for each request must be greater than the previous one.
