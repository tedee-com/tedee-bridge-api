![](/assets/github-logo.svg "GitHub Logo") [Edit on Github](https://github.com/tedee-com/tedee-bridge-api/blob/master/howtos/get_and_sync_locks.md)

For the purpose of this tutorial, let's assume that you possess one or more locks, and it is essential to retrieve their data initially and subsequently synchronize their states at regular intervals.

## Get list of locks

The first step in managing your locks is to retrieve the complete list of locks paired with the Bridge. To do this, use the [Endpoints: List of Tedee Locks](/#tag/Lock/operation/getLockList) endpoint. It will return detailed information for each lock, for example their current statuses.

**Sample request**

    curl -v -X GET "http://192.168.1.25/v1.0/lock?api_token=<<api_key>>"

## Sync locks

After receiving the list of locks, you can repeat the above request as many times you need. However, to keep the lock status up to date, we recommend using the [callback/webhook](/#tag/About-webhooks) approach that not only optimizes the performance of your application but also ensures a more efficient use of resources.