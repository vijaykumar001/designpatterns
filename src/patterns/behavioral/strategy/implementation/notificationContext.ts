import { NotificationStrategy } from '../interface/notificationStrategy';
/**
 * NotificationContext class is a context for the strategy pattern.
 * It holds a reference to a strategy and provides a method to set and use that strategy.
 */
export class NotificationContext {
  private strategy: NotificationStrategy;

  constructor(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: NotificationStrategy): void {
    this.strategy = strategy;
  }

  async notify(recipient: string, message: string): Promise<void> {
    await this.strategy.sendNotification(recipient, message);
  }
}