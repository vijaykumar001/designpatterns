import { State } from "../interfaces/stateInterface";
import { DeliveredState } from "./deliveredState";
import { ProcessingState } from "./processingState";

/**
 * ShippedState Class
 * Represents the "Shipped" state of an order.
 */
export class ShippedState implements State {
  next(): State {
    return new DeliveredState();
  }

  previous(): State {
    return new ProcessingState();
  }

  printStatus(): void {
    console.log("Order has been shipped.");
  }
}