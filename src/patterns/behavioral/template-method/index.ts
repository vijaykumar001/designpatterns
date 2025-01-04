import { Circle } from "./implementations/circle";
import { Square } from "./implementations/square";

/**
 * Main function to demonstrate the Template Method pattern.
 */
const main = () => {
  const circle = new Circle(5);
  const square = new Square(4);

  console.log("Rendering Circle:");
  circle.render();

  console.log("\nRendering Square:");
  square.render();
};

main();