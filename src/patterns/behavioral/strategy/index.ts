/**
 * Strategy Pattern for OTP Notifications
 *  
 * This project demonstrates the Strategy Pattern to send OTP notifications via WhatsApp, Mobile SMS, or Email.
 * 
 * Features:
 * - Flexible notification methods (WhatsApp, SMS, Email).
 * - Interchangeable algorithms using Strategy Pattern.
 * - Implements SOLID principles.
 */
import { NotificationContext } from './implementation/notificationContext';
import { WhatsAppNotification } from './implementation/whatsAppNotification';
import { MobileNotification } from './implementation/mobileNotification';
import { EmailNotification } from './implementation/emailNotification';

(async () => {
  const whatsappStrategy = new WhatsAppNotification();
  const mobileStrategy = new MobileNotification();
  const emailStrategy = new EmailNotification();

  const context = new NotificationContext(whatsappStrategy);
  
  console.log('Sending WhatsApp OTP...');
  await context.notify('recipient_whatsapp_number', 'Your OTP is 123456');

  console.log('Switching to Mobile SMS...');
  context.setStrategy(mobileStrategy);
  await context.notify('recipient_mobile_number', 'Your OTP is 123456');

  console.log('Switching to Email...');
  context.setStrategy(emailStrategy);
  await context.notify('recipient_email@example.com', 'Your OTP is 123456');
})();
