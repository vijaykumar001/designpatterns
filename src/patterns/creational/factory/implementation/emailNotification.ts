import { Notification } from '../interface/notification';

class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Email sent with message: ${message}`);
    }
}

export { EmailNotification };   