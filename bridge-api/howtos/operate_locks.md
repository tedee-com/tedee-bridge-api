 ![](/assets/github-logo.svg "GitHub Logo") [Edit on Github](https://github.com/tedee-com/tedee-bridge-api/blob/master/howtos/operate_locks.md)

You should calibrate the lock before using these endpoints. If you didn't calibrate the lock, these endpoints will return an error code indicating the lock is not calibrated.

You can perform following actions on lock:
* [Lock](/#tag/Lock/operation/postLock)
* [Unlock](/#tag/Lock/operation/postUnlock)
* [Pull](/#tag/Lock/operation/postPull)

Each action can be performed only in specific lock states. Here is Lock state diagram:  
  
![Lock states diagram](/bridge-api/howtos/images/lock-states-diagram.png "Lock states diagram")  

## Lock Tedee lock

To lock the device first make sure it is in unlocked or semi-locked state then send [Lock request](/#tag/Lock/operation/postLock).

**Lock request**  

We will send lock request for device with id = 1.

**Sample request**

    curl -v -X POST "http://192.168.1.25/v1.0/lock/1/lock" -H "Content-Length: 0" -H "api_token: <<api_key>>" 

In the response you will receive an HTTP status code 204 if the action has started successfully.
  
**NOTE:**  
The response is sent immediately after the locking action has started. The result of the action can be checked by sending a [sync request](/#tag/Get-and-sync-locks) or via the [Webhook/callback event](/#tag/About-webhooks) - if configured.  
Also, please note that the locking action usually takes up to 3 seconds.


## Unlock Tedee lock

To unlock the device first make sure it is in locked or semi-locked state then send [Unlock request](/#tag/Lock/operation/postUnlock).

**Unlock request**

We will send unlock request for device with id = 1.

**Sample request**

    curl -v -X POST "http://192.168.1.25/v1.0/lock/1/unlock" -H "Content-Length: 0" -H "api_token: <<api_key>>" 

In the response you will receive an HTTP status code 204 if the action has started successfully.

**NOTE:**  
When lock has auto pull spring enabled it will also perform pull spring within unlock command.  
Optional parameter (``mode``) in the request allows to unlock the lock without pulling the spring.  
Optional parameter (``mode``) in the request allows to perform pull spring when lock is in unlocked state.  
The response is sent immediately after the locking action has started. The result of the action can be checked by sending a [sync request](/#tag/Get-and-sync-locks) or via the [Webhook/callback event](/#tag/About-webhooks) - if configured.  


## Pull spring in Tedee lock

You must calibrate the pull spring in your lock before using. To perform pull spring first make sure lock is in unlocked state then send [Pull Spring request](/#tag/Lock/operation/postPull).

**NOTE:**  
When lock has auto pull spring enabled it will also perform pull spring within unlock command. You shouldn't send additional pull spring command then.

**Pull Spring request**

Example request will perform pull spring on the lock with id = 1.

**Sample request**

    curl -v -X POST "http://192.168.1.25/v1.0/lock/1/pull" -H "Content-Length: 0" -H "api_token: <<api_key>>" 

In the response you will receive an HTTP status code 204 if the action has started successfully.

**NOTE:**  
To perform pull spring you can also use Unlock request with optional parameter.  
The response is sent immediately after the locking action has started. The result of the action can be checked by sending a [sync request](/#tag/Get-and-sync-locks) or via the [Webhook/callback event](/#tag/About-webhooks) - if configured. 

If you didn't calibrate pull spring this endpoint will return an error code indicating the lock is not calibrated for pull spring.
