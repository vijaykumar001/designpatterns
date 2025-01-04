import { Notification } from '../interface/notification';

export class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`SMS sent with message: ${message}`);
    }
}
