import { Stock } from "../../../src/patterns/behavioral/observer/implementations/stock";
import { StockSubscriber } from "../../../src/patterns/behavioral/observer/implementations/stockSubscriber";
/**
 * Test cases for the observer design pattern.
 */
describe("Observer Design Pattern", () => {
  it("should notify all subscribers of a stock price change", () => {
    const stock = new Stock("Tesla");
    const subscriber1 = new StockSubscriber("Subscriber A");
    const subscriber2 = new StockSubscriber("Subscriber B");

    // Mock the console.log for testing
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    stock.addObserver(subscriber1);
    stock.addObserver(subscriber2);

    stock.setPrice(200);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification for Subscriber A: Tesla stock price is now $200.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification for Subscriber B: Tesla stock price is now $200.00"
    );

    consoleSpy.mockRestore();
  });

  it("should not notify removed subscribers", () => {
    const stock = new Stock("Google");
    const subscriber1 = new StockSubscriber("Subscriber A");

    // Mock the console.log for testing
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    stock.addObserver(subscriber1);
    stock.setPrice(1000);
    stock.removeObserver(subscriber1);
    stock.setPrice(1200);

    expect(consoleSpy).toHaveBeenCalledTimes(1); // Notified only once
    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification for Subscriber A: Google stock price is now $1000.00"
    );

    consoleSpy.mockRestore();
  });
});
