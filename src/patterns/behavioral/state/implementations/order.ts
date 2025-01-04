import { State } from "../interfaces/stateInterface";

/**
 * Order Class
 * Represents an order that changes its behavior based on its state.
 */
export class Order {
  private state: State;

  constructor(initialState: State) {
    this.state = initialState;
  }

  setState(state: State): void {
    this.state = state;
  }

  nextState(): void {
    this.state = this.state.next();
  }

  previousState(): void {
    this.state = this.state.previous();
  }

  printStatus(): void {
    this.state.printStatus();
  }
}