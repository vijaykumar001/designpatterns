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
  } catch (error: any) {
    console.error(error.message);
  }
};

main();