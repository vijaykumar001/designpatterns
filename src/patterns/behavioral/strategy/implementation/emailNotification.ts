import { NotificationStrategy } from '../interface/notificationStrategy';

/**
 * EmailNotification class implements the NotificationStrategy interface.
 * This class is responsible for sending notifications via email.
 */
export class EmailNotification implements NotificationStrategy {
  async sendNotification(recipient: string, message: string): Promise<void> {
    console.log(`Sending Email to ${recipient}: ${message}`);
    // Add Email API integration logic here
  }
}