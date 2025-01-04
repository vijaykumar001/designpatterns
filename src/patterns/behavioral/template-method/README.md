# Template Method Design Pattern

## Overview
This project demonstrates the Template Method Design Pattern in TypeScript. The pattern defines the skeleton of an algorithm in an abstract class while allowing subclasses to implement specific steps.

## Directory Structure
- **src/patterns/behavioral/template-method/**: Contains the implementation of the design pattern.
- **tests/behavioral/template-method/**: Contains test cases for the design pattern.

## Files
- `baseShape.ts`: Abstract class defining the template method.
- `circle.ts`: Concrete class implementing `Circle`.
- `square.ts`: Concrete class implementing `Square`.

## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/template-method/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/template-method/index.ts
import { Circle } from "./circle";
import { Square } from "./square";

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

```

## Expected Output
Rendering Circle:
Drawing a circle.
Area: 78.54
Custom behavior for Circle.

Rendering Square:
Drawing a square.
Area: 16
Custom behavior for Square.

## Tests Cases - Test Snippet (from templateMethod.test.ts)
```ts
// tests/behavioral/template-method/templateMethod.test.ts

import { Circle } from "../../src/patterns/behavioral/template-method/circle";
import { Square } from "../../src/patterns/behavioral/template-method/square";

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

```

## Benefits
1. Encapsulation: The template method encapsulates the algorithm's structure, hiding the implementation details from the subclasses.
2. Reusability: Subclasses can reuse the template method without duplicating code.
3. Flexibility: Subclasses can override specific steps without changing the overall structure of the algorithm.


### Summary
The Template Method Design Pattern is useful when you need to define the skeleton of an algorithm in an abstract class while allowing subclasses to implement specific steps. It provides a way to define the structure of an algorithm in a controlled manner, allowing for flexibility and customization at the same time.