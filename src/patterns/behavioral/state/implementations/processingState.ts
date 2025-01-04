import { State } from "../interfaces/stateInterface";
import { ShippedState } from "./shippedState";
import { PendingState } from "./pendingState";

/**
 * ProcessingState Class
 * Represents the "Processing" state of an order.
 */
export class ProcessingState implements State {
  next(): State {
    return new ShippedState();
  }

  previous(): State {
    return new PendingState();
  }

  printStatus(): void {
    console.log("Order is being processed.");
  }
}