import { State } from "../interfaces/stateInterface";
import { ProcessingState } from "./processingState";

/**
 * PendingState Class
 * Represents the "Pending" state of an order.
 */
export class PendingState implements State {
  next(): State {
    return new ProcessingState();
  }

  previous(): State {
    throw new Error("Pending is the initial state. Cannot go back.");
  }

  printStatus(): void {
    console.log("Order is pending.");
  }
}