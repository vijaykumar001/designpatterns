import { Notification } from '../interface/notification';

export class PushNotification implements Notification {
    send(message: string): void {
        console.log(`Push notification sent with message: ${message}`);
    }
}
