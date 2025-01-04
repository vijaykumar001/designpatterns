# State Design Pattern

This example demonstrates the **State Design Pattern** using an e-commerce order processing system. The state pattern allows an object (Order) to change its behavior dynamically based on its current state.

## Problem Statement

An order in an e-commerce application goes through multiple states:
1. `Pending`
2. `Processing`
3. `Shipped`
4. `Delivered`

Each state has unique behavior. The State Design Pattern ensures that the order's behavior changes dynamically without introducing complex conditionals.

## Implementation

- **Interfaces**:
  - `State`: Defines the contract for all states.
- **Implementations**:
  - `PendingState`, `ProcessingState`, `ShippedState`, `DeliveredState`.

## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/state/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/state/index.ts

import { Order } from "./implementations/order";
import { PendingState } from "./implementations/pendingState";

const main = () => {
  const order = new Order(new PendingState());

  order.printStatus();
  order.nextState();

  order.printStatus();
  order.nextState();

  order.printStatus();
  order.nextState();

  try {
    order.nextState();
  } catch (error) {
    console.error(error.message);
  }
};

main();
```

## Expected Output
Order is pending.
Order is being processed.
Order has been shipped.
Order has been delivered.
Delivered is the final state. Cannot go forward.

## Tests Cases - Test Snippet (from state.test.ts)
```ts
// tests/behavioral/state/state.test.ts

import { Order } from "../../../src/patterns/behavioral/state/implementations/order";
import { PendingState } from "../../../src/patterns/behavioral/state/implementations/pendingState";
import { ProcessingState } from "../../../src/patterns/behavioral/state/implementations/processingState";
import { ShippedState } from "../../../src/patterns/behavioral/state/implementations/shippedState";
import { DeliveredState } from "../../../src/patterns/behavioral/state/implementations/deliveredState";

describe("State Design Pattern", () => {
  it("should transition through states correctly", () => {
    const order = new Order(new PendingState());

    expect(() => order.previousState()).toThrow("Pending is the initial state. Cannot go back.");
    order.nextState();
    expect(order["state"] instanceof ProcessingState).toBe(true);

    order.nextState();
    expect(order["state"] instanceof ShippedState).toBe(true);

    order.nextState();
    expect(order["state"] instanceof DeliveredState).toBe(true);

    expect(() => order.nextState()).toThrow("Delivered is the final state. Cannot go forward.");
  });
});

```

## Benefits
1. Single Responsibility: Each state encapsulates its logic.
2. Open/Closed: Easily add new states without modifying existing code.
3. Behavior Encapsulation: State-specific behavior is localized within the state classes.


### Summary
The State Design Pattern is useful when you need to manage an object's behavior based on its state, especially in scenarios where the behavior changes frequently or is complex. It allows for state-specific behavior to be encapsulated within the state classes, making the code more maintainable and scalable.