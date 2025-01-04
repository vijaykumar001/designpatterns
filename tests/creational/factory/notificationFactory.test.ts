import { NotificationFactory, EmailNotification, SMSNotification, PushNotification } from '../../../src/patterns/creational/factory/index';
/**
 * Test cases for the factory design pattern.
 */
describe('NotificationFactory', () => {
    it('should create an EmailNotification', () => {
        const notification = NotificationFactory.createNotification('email');
        //notification.send('Hello, this is a test email!');
        expect(notification).toBeInstanceOf(EmailNotification);
    });
    it('should create an SMSNotification', () => {
        const notification = NotificationFactory.createNotification('sms');
        //notification.send('Hello, this is a test sms!');
        expect(notification).toBeInstanceOf(SMSNotification);
    });
    it('should create a PushNotification', () => {
        const notification = NotificationFactory.createNotification('push');
        //notification.send('Hello, this is a push notification!');
        expect(notification).toBeInstanceOf(PushNotification);
    });
    it('should throw an error for an invalid notification type', () => {
        expect(() => NotificationFactory.createNotification('invalid')).toThrow('Invalid notification type');
    });
});