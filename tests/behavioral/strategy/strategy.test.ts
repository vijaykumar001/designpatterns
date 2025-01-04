import { NotificationContext } from '../../../src/patterns/behavioral/strategy/implementation/notificationContext';
import { WhatsAppNotification } from '../../../src/patterns/behavioral/strategy/implementation/whatsAppNotification';
import { MobileNotification } from '../../../src/patterns/behavioral/strategy/implementation/mobileNotification';
import { EmailNotification } from '../../../src/patterns/behavioral/strategy/implementation/emailNotification';
/**
 * Test cases for the strategy design pattern.
 */
describe('NotificationContext with Strategy Pattern', () => {
  it('should send WhatsApp notification', async () => {
    const whatsappStrategy = new WhatsAppNotification();
    const context = new NotificationContext(whatsappStrategy);

    await expect(
      context.notify('recipient_whatsapp_number', 'Test WhatsApp Message')
    ).resolves.not.toThrow();
  });

  it('should send Mobile SMS notification', async () => {
    const mobileStrategy = new MobileNotification();
    const context = new NotificationContext(mobileStrategy);

    await expect(
      context.notify('recipient_mobile_number', 'Test SMS Message')
    ).resolves.not.toThrow();
  });

  it('should send Email notification', async () => {
    const emailStrategy = new EmailNotification();
    const context = new NotificationContext(emailStrategy);

    await expect(
      context.notify('recipient_email@example.com', 'Test Email Message')
    ).resolves.not.toThrow();
  });
});
