import { NotificationStrategy } from '../interface/notificationStrategy';
/**
 * MobileNotification class implements the NotificationStrategy interface.
 * This class is responsible for sending notifications via mobile SMS.
 */ 
export class MobileNotification implements NotificationStrategy {
  async sendNotification(recipient: string, message: string): Promise<void> {
    console.log(`Sending Mobile SMS to ${recipient}: ${message}`);
    // Add SMS API integration logic here
  }
}