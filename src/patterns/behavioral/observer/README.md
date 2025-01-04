# Observer Design Pattern

This example demonstrates the **Observer Design Pattern** through a stock market application where multiple subscribers (investors, analysts) get notified of stock price changes.

## Problem Statement

In a stock market application, the price of stocks frequently changes. Multiple subscribers need to get notified whenever the price of a stock changes. The Observer Design Pattern is used to decouple the subject (stock) from its observers (subscribers), ensuring loose coupling and scalability.

## Implementation

### Features:
1. Add and remove subscribers dynamically.
2. Notify all subscribers when the stock price changes.

### Files and Structure:
- **Interfaces**:
  - `Observer`: Represents objects that get notified of changes.
  - `Subject`: Represents the object being observed.
- **Implementations**:
  - `Stock`: Implements the Subject interface and represents a stock.
  - `StockSubscriber`: Implements the Observer interface and represents a subscriber.

## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/observer/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/observer/index.ts

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
```

## Expected Output
Setting Apple stock price to $150
Notification for Investor A: Apple stock price is now $150.00
Notification for Analyst B: Apple stock price is now $150.00

Setting Apple stock price to $155
Notification for Investor A: Apple stock price is now $155.00
Notification for Analyst B: Apple stock price is now $155.00

Removing Investor A and updating price to $160
Notification for Analyst B: Apple stock price is now $160.00



## Tests Cases - Test Snippet (from observer.test.ts)
```ts
// tests/behavioral/observer/observer.test.ts

import { Stock } from "../../../src/patterns/behavioral/observer/implementations/stock";
import { StockSubscriber } from "../../../src/patterns/behavioral/observer/implementations/stockSubscriber";

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

```

## Benefits
1. Loose Coupling: Subjects and observers are decoupled, making the system extensible.
2. Dynamic Subscription: Observers can be added or removed at runtime.
3. SOLID Principles: Adheres to Single Responsibility and Open/Closed principles.


### Summary
The Observer Design Pattern is useful when you need to notify multiple objects about changes in a subject, especially in scenarios where you want to provide a real-time update mechanism. It allows for dynamic subscription and loose coupling between subjects and observers.