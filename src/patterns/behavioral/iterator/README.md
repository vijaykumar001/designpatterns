# Iterator Design Pattern
This example demonstrates the **Iterator Design Pattern** by iterating over a collection of employees in a uniform way.

## Problem Statement
In a large organization, employee records are stored in different collections, such as an array, a database, or an API. The HR system needs to traverse these collections to display employee details in a consistent and unified way. The system should abstract away the underlying structure of these collections and allow iteration over their elements using a standard interface.

This is where the Iterator Design Pattern is helpful. It provides a uniform way to traverse collections, regardless of their type or implementation.

## Implementation

### Features:
1. Add employees to a collection.
2. Traverse the collection using a standardized iterator.

### Files and Structure:
- **Interfaces**:
  - `Iterator`: Defines traversal methods (`hasNext`, `next`).
  - `Aggregate`: Defines a method to create an iterator.
- **Models**:
  - `Employee`: Represents an employee entity.
- **Implementations**:
  - `EmployeeCollection`: Implements `Aggregate` for managing employees.
  - `EmployeeIterator`: Implements `Iterator` for traversing the employee collection.


## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/iterator/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/iterator/index.ts

import { Employee } from "./models/employee";
import { EmployeeCollection } from "./implementations/employeeCollection";

/**
 * Entry point for the Iterator Design Pattern example.
 */
const main = () => {
  const collection = new EmployeeCollection();

  collection.addEmployee(new Employee(1, "John Doe", "Developer"));
  collection.addEmployee(new Employee(2, "Jane Smith", "Designer"));
  collection.addEmployee(new Employee(3, "Alice Johnson", "Manager"));

  const iterator = collection.createIterator();

  console.log("Employee List:");
  while (iterator.hasNext()) {
    const employee = iterator.next();
    if (employee) {
      console.log(`${employee.id}: ${employee.name} - ${employee.position}`);
    }
  }
};

main();

```
## Expected Output
Employee List:
1: John Doe - Developer
2: Jane Smith - Designer
3: Alice Johnson - Manager

## Tests Cases - Test Snippet (from iterator.test.ts)
```ts
// tests/behavioral/iterator/iterator.test.ts

import { Employee } from "../../../src/patterns/behavioral/iterator/models/employee";
import { EmployeeCollection } from "../../../src/patterns/behavioral/iterator/implementations/employeeCollection";

describe("Iterator Design Pattern", () => {
  it("should iterate over a collection of employees", () => {
    const collection = new EmployeeCollection();
    collection.addEmployee(new Employee(1, "John Doe", "Developer"));
    collection.addEmployee(new Employee(2, "Jane Smith", "Designer"));

    const iterator = collection.createIterator();

    const result: string[] = [];
    while (iterator.hasNext()) {
      const employee = iterator.next();
      if (employee) {
        result.push(`${employee.id}: ${employee.name}`);
      }
    }

    expect(result).toEqual(["1: John Doe", "2: Jane Smith"]);
  });

  it("should return null when no more elements are present", () => {
    const collection = new EmployeeCollection();
    const iterator = collection.createIterator();

    expect(iterator.next()).toBeNull();
  });
});

```

## Benefits
1. Encapsulation: Hides the internal structure of collections.
2. Open/Closed Principle: Supports new types of collections without modifying existing code.
3. Reusability: The iterator can be reused for different types of collections.


### Summary
The Iterator Design Pattern is helpful when you need to traverse a collection of objects in a uniform way, regardless of the underlying structure of the collection. It provides a standard way to access elements in a collection without exposing the collection's internal structure. This pattern is widely used in frameworks and libraries to provide a consistent way to traverse collections. 
