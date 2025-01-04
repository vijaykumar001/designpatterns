import { Observer } from "../interfaces/observerInterface";

/**
 * StockSubscriber Class
 * Represents a subscriber that gets notified of stock price changes.
 */
export class StockSubscriber implements Observer {
  constructor(private subscriberName: string) {}

  update(stockName: string, price: number): void {
    console.log(
      `Notification for ${this.subscriberName}: ${stockName} stock price is now $${price.toFixed(2)}`
    );
  }
}