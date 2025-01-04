import { Circle } from "../../../src/patterns/behavioral/template-method/implementations/circle";
import { Square } from "../../../src/patterns/behavioral/template-method/implementations/square";
/**
 * Test cases for the template method design pattern.
 */
describe("Template Method Pattern", () => {
  it("should calculate area and render Circle correctly", () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).toBeCloseTo(78.53981633974483);
  });

  it("should calculate area and render Square correctly", () => {
    const square = new Square(4);
    expect(square.calculateArea()).toBe(16);
  });

  it("should execute custom behavior for Circle", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const circle = new Circle(5);
    circle.render();

    expect(consoleSpy).toHaveBeenCalledWith("Custom behavior for Circle.");
    consoleSpy.mockRestore();
  });

  it("should execute custom behavior for Square", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const square = new Square(4);
    square.render();

    expect(consoleSpy).toHaveBeenCalledWith("Custom behavior for Square.");
    consoleSpy.mockRestore();
  });
});