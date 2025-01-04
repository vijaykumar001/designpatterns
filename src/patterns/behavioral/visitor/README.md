# Visitor Design Pattern Example

## Description
This project demonstrates the Visitor Design Pattern using a real-world example of calculating bonuses for various types of employees.

## Features
- Employee types: Full-time, Part-time, and Contractors.
- Bonus calculation logic implemented using the Visitor Design Pattern.

## Problem Statement
In a company, there are different types of employees (e.g., full-time, part-time, contractors). Each employee type needs to calculate their yearly bonus and tax deductions. Instead of modifying the employee classes whenever the calculation logic changes, we can use the Visitor Design Pattern to separate the operations from the objects themselves.

## Implementation
- **Interfaces**:
  - `Element`: Defines the contract for all elements.
  - `VisitorInterface`: Defines the contract for all visitors.
- **Implementations**:
  - `Employee`, `Contractor`, `PartTimeEmployee`.
  - `BonusVisitor`.

## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/visitor/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/visitor/index.ts

// Entry point for the visitor design pattern
import { Employee } from "./elements/employee";
import { Contractor } from "./elements/contractor";
import { PartTimeEmployee } from "./elements/partTimeEmployee";
import { BonusVisitor } from "./implementation/visitor";

// Create employee objects
const employees = [
    new Employee("Alice", 50000),
    new PartTimeEmployee("Bob", 20000),
    new Contractor("Charlie", 30000),
];

// Create a visitor
const bonusVisitor = new BonusVisitor();

// Apply visitor to each employee
employees.forEach((employee) => {
    employee.accept(bonusVisitor);
});

```

## Expected Output
Alice (Employee) yearly bonus: 5000
Bob (Part-Time Employee) yearly bonus: 1000
Charlie (Contractor) yearly bonus: 3000000

## Tests Cases - Test Snippet (from visitor.test.ts)
```ts
// tests/behavioral/visitor/visitor.test.ts

import { Employee } from "../../../src/patterns/behavioral/visitor/elements/employee";
import { Contractor } from "../../../src/patterns/behavioral/visitor/elements/contractor";
import { PartTimeEmployee } from "../../../src/patterns/behavioral/visitor/elements/partTimeEmployee";
import { BonusVisitor } from "../../../src/patterns/behavioral/visitor/implementation/visitor";

describe("Visitor Design Pattern Test", () => {
    it("should calculate bonuses correctly", () => {
        const employees = [
            new Employee("Alice", 50000),
            new PartTimeEmployee("Bob", 20000),
            new Contractor("Charlie", 30000),
        ];

        const bonusVisitor = new BonusVisitor();

        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        employees.forEach((employee) => {
            employee.accept(bonusVisitor);
        });

        expect(consoleSpy).toHaveBeenCalledWith("Alice (Employee) yearly bonus: 5000");
        expect(consoleSpy).toHaveBeenCalledWith("Bob (Part-Time Employee) yearly bonus: 1000");
        expect(consoleSpy).toHaveBeenCalledWith("Charlie (Contractor) yearly bonus: 3000000");

        consoleSpy.mockRestore();
    });
});

```

## Benefits
1. Separation of Concerns: The visitor pattern separates the algorithm (bonus calculation) from the object structure (employee types).
2. Open/Closed Principle: New visitor implementations can be added without modifying existing classes.
3. Extensibility: Easily add new types of employees and new bonus calculation methods.


### Summary
The Visitor Design Pattern is useful when you need to perform operations on a collection of objects without modifying their classes. It allows for adding new operations to the collection without changing the classes of the objects themselves. This pattern is particularly useful in scenarios where the operations to be performed on the objects are diverse and may change frequently.