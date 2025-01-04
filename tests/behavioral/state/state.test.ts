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
