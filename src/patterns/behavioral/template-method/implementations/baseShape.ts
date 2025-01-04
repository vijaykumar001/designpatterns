import { Shape } from "../interfaces/shape";

/**
 * Abstract class defining the template method for handling shapes.
 */
export abstract class BaseShape implements Shape {
  /**
   * Template method defining the sequence of steps.
   */
  public render(): void {
    this.draw();
    console.log(`Area: ${this.calculateArea()}`);
    this.customBehavior();
  }

  /**
   * Abstract method to draw the shape.
   */
  abstract draw(): void;

  /**
   * Abstract method to calculate the area of the shape.
   */
  abstract calculateArea(): number;

  /**
   * Optional hook for custom behavior.
   */
  protected customBehavior(): void {
    console.log("Default behavior.");
  }
}