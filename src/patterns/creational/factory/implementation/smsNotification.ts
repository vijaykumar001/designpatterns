import { Notification } from '../interface/notification';

/**
 * Implementation of the SMSNotification class.
 * 
 * @class
 * @implements {Notification}
 */
export class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`SMS sent with message: ${message}`);
    }
}
