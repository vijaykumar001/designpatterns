import { State } from "../interfaces/stateInterface";
import { ShippedState } from "./shippedState";

/**
 * DeliveredState Class
 * Represents the "Delivered" state of an order.
 */
export class DeliveredState implements State {
  next(): State {
    throw new Error("Delivered is the final state. Cannot go forward.");
  }

  previous(): State {
    return new ShippedState();
  }

  printStatus(): void {
    console.log("Order has been delivered.");
  }
}