import { BaseShape } from "./baseShape";

/**
 * Circle shape implementation.
 */
export class Circle extends BaseShape {
  constructor(private radius: number) {
    super();
  }

  draw(): void {
    console.log("Drawing a circle.");
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  protected customBehavior(): void {
    console.log("Custom behavior for Circle.");
  }
}