import { Notification } from '../interface/notification';

/**
 * Implementation of the EmailNotification class.
 * 
 * @class
 * @implements {Notification}
 */
class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Email sent with message: ${message}`);
    }
}

export { EmailNotification };   