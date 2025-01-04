import { Stock } from "./implementations/stock";
import { StockSubscriber } from "./implementations/stockSubscriber";

/**
 * Entry point for the Observer Design Pattern example.
 */
const main = () => {
  const appleStock = new Stock("Apple");

  const subscriber1 = new StockSubscriber("Investor A");
  const subscriber2 = new StockSubscriber("Analyst B");

  // Add subscribers
  appleStock.addObserver(subscriber1);
  appleStock.addObserver(subscriber2);

  // Change stock price
  console.log("Setting Apple stock price to $150");
  appleStock.setPrice(150);

  console.log("\nSetting Apple stock price to $155");
  appleStock.setPrice(155);

  // Remove a subscriber and update stock price again
  console.log("\nRemoving Investor A and updating price to $160");
  appleStock.removeObserver(subscriber1);
  appleStock.setPrice(160);
};

main();