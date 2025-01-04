import { BaseShape } from "../implementations/baseShape";

/**
 * Square shape implementation.
 */
export class Square extends BaseShape {
  constructor(private side: number) {
    super();
  }

  draw(): void {
    console.log("Drawing a square.");
  }

  calculateArea(): number {
    return this.side * this.side;
  }

  protected customBehavior(): void {
    console.log("Custom behavior for Square.");
  }
}