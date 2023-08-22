This section describes how to authenticate. You must authenticate to make requests to the API.

## Step 1: Obtain an API Key for demo purposes

Before making an authenticated request, you must first obtain an API key. Register on our platform [here](#link-to-registration-page) to get your personal API key.

## Step 2: Generating a JWT Token

Use your API key to request a JWT token. Send a POST request to our authentication endpoint:

```
POST /api/authenticate
Headers:
Content-Type: application/json
Body:
{
"apiKey": "YOUR_API_KEY"
}
```

The response will include your JWT token:

```json
{
"token": "YOUR_JWT_TOKEN"
}
```

## Step 3: Making Authenticated Requests

Include your JWT token in the `Authorization` header for subsequent API requests:

```
GET /api/resource
Headers:
Authorization: Bearer YOUR_JWT_TOKEN
```

## Token Expiry

JWT tokens expire after 24 hours. Once a token is expired, you'll need to generate a new one using your API key. It's a good practice to handle token expiry gracefully in your application, ensuring you always use a valid token for your requests.

## Handling Errors

If you use an invalid token or your token has expired, you will receive a `401 Unauthorized` response. In this case, re-authenticate to obtain a new JWT token.

