import { Notification } from './interface/notification';
import { EmailNotification } from './implementation/emailNotification';
import { SMSNotification } from './implementation/smsNotification';
import { PushNotification } from './implementation/pushNotification';

export class NotificationFactory {
    static createNotification(type: string): Notification {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw new Error('Invalid notification type');
        }
    }
}
