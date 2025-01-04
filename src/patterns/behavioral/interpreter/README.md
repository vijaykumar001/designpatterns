# Interpreter Design Pattern
This example demonstrates the Interpreter Design Pattern by evaluating mathematical expressions. The pattern allows for the interpretation and evaluation of complex expressions dynamically.

## Problem Statement
A real-world application of the Interpreter Design Pattern is evaluating mathematical expressions. Consider a scenario where a system needs to parse and compute user-provided expressions dynamically. These expressions can involve basic operations like addition, subtraction, multiplication, and division.

This implementation creates an interpreter to process such mathematical expressions effectively.

## Implementation
Supported Operations:
1. Addition (AddExpression)
2. Subtraction (SubtractExpression)
3. Multiplication (MultiplyExpression)
4. Division (DivideExpression)

### Files and Structure
- **Terminal Expression**: Represents numbers (e.g., NumberExpression).
- **Non-Terminal Expressions**: Represents mathematical operations (e.g., AddExpression, SubtractExpression, etc.).

## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/interpreter/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/interpreter/index.ts

import { NumberExpression } from "./expressions/numberExpression";
import { AddExpression } from "./expressions/addExpression";
import { SubtractExpression } from "./expressions/subtractExpression";
import { MultiplyExpression } from "./expressions/multiplyExpression";
import { DivideExpression } from "./expressions/divideExpression";

/**
 * Entry point for the Interpreter Design Pattern example.
 */
export const interpretExpression = (): number => {
  const left = new NumberExpression(10);
  const right = new NumberExpression(5);

  // Create a composite expression: ((10 + 5) * 2) / 3
  const addition = new AddExpression(left, right);
  const multiplication = new MultiplyExpression(addition, new NumberExpression(2));
  const division = new DivideExpression(multiplication, new NumberExpression(3));
  const subtraction = new SubtractExpression(division, new NumberExpression(1));

  return subtraction.interpret();
};

console.log("Result of the expression:", interpretExpression());
```
## Expected Output
Result of the expression: 9

## Tests Cases - Test Snippet (from interpreter.test.ts)
```ts
// tests/behavioral/interpreter/interpreter.test.ts

import { NumberExpression } from "../../../src/patterns/behavioral/interpreter/expressions/numberExpression";
import { AddExpression } from "../../../src/patterns/behavioral/interpreter/expressions/addExpression";
import { SubtractExpression } from "../../../src/patterns/behavioral/interpreter/expressions/subtractExpression";
import { MultiplyExpression } from "../../../src/patterns/behavioral/interpreter/expressions/multiplyExpression";
import { DivideExpression } from "../../../src/patterns/behavioral/interpreter/expressions/divideExpression";

describe("Interpreter Design Pattern", () => {
  it("should interpret a composite expression", () => {
    const left = new NumberExpression(10);
    const right = new NumberExpression(5);

    const addition = new AddExpression(left, right); // 10 + 5 = 15
    const multiplication = new MultiplyExpression(addition, new NumberExpression(2)); // 15 * 2 = 30
    const division = new DivideExpression(multiplication, new NumberExpression(3)); // 30 / 3 = 10
    const subtraction = new SubtractExpression(division, new NumberExpression(1)); // 10 - 1 = 9

    expect(subtraction.interpret()).toBe(9);
  });

  it("should throw an error for division by zero", () => {
    const left = new NumberExpression(10);
    const right = new NumberExpression(0);

    const division = new DivideExpression(left, right);

    expect(() => division.interpret()).toThrowError("Division by zero is not allowed.");
  });
});

```

## Benefits
1. Single Responsibility Principle
Each class handles a specific type of expression or operation.

2. Open/Closed Principle
The design is extendable. Adding support for new operations (e.g., modulus, power) is easy by creating new Expression classes.

3. Dependency Inversion Principle
All concrete operations depend on the abstract Expression interface.

### Summary
- The Interpreter Design Pattern is helpful when evaluating dynamic, complex expressions.
- It builds a tree-like structure of expressions and interprets them recursively.
- This pattern is not limited to mathematical computations; it can also be applied in domain-specific languages, configuration parsers, or query interpreters.

