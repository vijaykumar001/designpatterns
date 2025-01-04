import { Notification } from '../interface/notification';

/**
 * Implementation of the PushNotification class.
 * 
 * @class
 * @implements {Notification}
 */
export class PushNotification implements Notification {
    send(message: string): void {
        console.log(`Push notification sent with message: ${message}`);
    }
}
