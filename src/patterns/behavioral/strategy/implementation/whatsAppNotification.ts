import { NotificationStrategy } from '../interface/notificationStrategy';
/**
 * WhatsAppNotification class implements the NotificationStrategy interface.
 * This class is responsible for sending notifications via WhatsApp.
 */
export class WhatsAppNotification implements NotificationStrategy {
  async sendNotification(recipient: string, message: string): Promise<void> {
    console.log(`Sending WhatsApp notification to ${recipient}: ${message}`);
    // Add WhatsApp API integration logic here
  }
}
