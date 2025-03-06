# Design Patterns Implementation
This repository contains examples of various design patterns implemented in TypeScript. Each pattern is demonstrated with a real-world scenario to illustrate its use and benefits.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Design Patterns Included](#design-patterns-included)
- [Usage](#usage)
- [Contributing](#contributing)
- [Conclusion](#Conclusion)

## Introduction

Design patterns are proven solutions to common software design problems. This repository provides examples of several design patterns, implemented in TypeScript, to help developers understand and apply these patterns in their own projects.

## Project Structure

```
src/
├── patterns/
│   ├── behavioral/
│   │   ├──design-pattern 
│   │      ├──index.ts      
│   ├── creational/
│   │   ├──design-pattern 
│   │      ├──index.ts
│   ├── structural/
│   │   ├──design-pattern 
│   │      ├──index.ts
└── README.md
```

### Each pattern follows this structure:

```
pattern-name/
├── interfaces.ts # Pattern interfaces
├── implementation.ts # Concrete implementations
├── example.ts # Usage examples
├── README.md # Pattern documentation
└── tests/ # Pattern tests
```

- **src/patterns/**: Contains the implementation of various design patterns.
- **tests/**: Contains test cases for each design pattern implementation.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vijaykumar001/designpatterns.git
   cd project-root
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the Tests**:
   To run all tests, use the following command:
   ```bash
   npm test
   ```

4. **Run the Tests in Watch Mode**:
   To run tests in watch mode, use:
   ```bash
   npm run test:watch
   ```

5. **Generate Test Coverage Report**:
   To generate a test coverage report, use:
   ```bash
   npm run test:coverage
   ```  

## Design Patterns Included
### Behavioral Patterns
1. Chain of Responsibility
- Purpose: Pass requests along a chain of handlers.
- When to use: For processing different kinds of requests in various ways.
- Example: src/patterns/behavioral/chain-of-responsibility

2. Command  
- Purpose: Turn requests into stand-alone objects.
- When to use: For parameterizing objects with operations.
- Example: src/patterns/behavioral/command

3. Interpreter
- Purpose: Define grammar and interpret expressions.
- When to use: For parsing simple domain-specific languages.
- Example: src/patterns/behavioral/interpreter

4. Iterator
- Purpose: Sequential access to elements.
- When to use: For traversing collections without exposing structure.
- Example: src/patterns/behavioral/iterator

5. Mediator
- Purpose: Reduce chaotic dependencies between objects.
- When to use: For loose coupling between components.
- Example: src/patterns/behavioral/mediator

6. Memento
- Purpose: Capture and restore object's state.
- When to use: For implementing undo mechanisms.
- Example: src/patterns/behavioral/memento 

7. Observer
- Purpose: Define subscription mechanism.
- When to use: For maintaining consistent state between related objects.
- Example: src/patterns/behavioral/observer

8. State
- Purpose: Alter object's behavior when state changes.
- When to use: For objects with state-dependent behavior.
- Example: src/patterns/behavioral/state

9. Strategy
- Purpose: Define family of interchangeable algorithms.
- When to use: For selecting algorithms at runtime.
- Example: src/patterns/behavioral/strategy

10. Template Method
- Purpose: Define skeleton of algorithm.
- When to use: For implementing invariant algorithm parts once.
- Example: src/patterns/behavioral/template-method

11. Visitor
- Purpose: Separate algorithms from objects.
- When to use: For adding operations to objects without modifying them.
- Example: src/patterns/behavioral/visitor

### Creational Patterns
1. Abstract Factory
- Purpose: Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
- When to use: When you need to ensure that the created objects are compatible with each other.
- Example: src/patterns/creational/abstract-factory

2. Builder
- Purpose: Separate the construction of a complex object from its representation. 
- When to use: When you need to create complex objects with many optional parameters.
- Example: src/patterns/creational/builder

3. Factory Method
- Purpose: Define an interface for creating an object, but let subclasses decide which class to instantiate.
- When to use: When you don't know beforehand the exact types and dependencies of the objects your code should work with.
- Example: src/patterns/creational/factory-method

4. Prototype
- Purpose: Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.
- When to use: When the type of objects to create is determined by a prototypical instance, which is more flexible than inheritance.
- Example: src/patterns/creational/prototype

5. Singleton
- Purpose: Ensure a class has only one instance, and provide a global point of access to it.
- When to use: When you need to ensure that a class has only one instance and provide a global point of access to it.
- Example: src/patterns/creational/singleton  

### Structural Patterns

1. Adapter
- Purpose: Convert the interface of a class into another interface clients expect.
- When to use: When you want to use an existing class and its interface, but the interface doesn't match the one you need.
- Example: src/patterns/structural/adapter

2. Bridge
- Purpose: Decouple an abstraction from its implementation so that the two can vary independently.
- When to use: When you want to avoid a permanent binding between an abstraction and its implementation.
- Example: src/patterns/structural/bridge

3. Composite
- Purpose: Compose objects into tree structures to represent part-whole hierarchies.  
- When to use: When you want to represent part-whole hierarchies.
- Example: src/patterns/structural/composite

4. Decorator
- Purpose: Attach additional responsibilities to an object dynamically.
- When to use: When you want to add responsibilities to objects without affecting other objects.
- Example: src/patterns/structural/decorator

5. Facade
- Purpose: Provide a unified interface to a set of interfaces in a subsystem. 
- When to use: When you want to provide a simple interface to a complex subsystem.
- Example: src/patterns/structural/facade

6. Flyweight
- Purpose: Use sharing to support large numbers of fine-grained objects efficiently.
- When to use: When you need to support a large number of objects that can be shared.
- Example: src/patterns/structural/flyweight

7. Proxy
- Purpose: Provide a surrogate or placeholder for another object to control access to it.
- When to use: When you want to provide a surrogate or placeholder for another object to control access to it.
- Example: src/patterns/structural/proxy
 
## Usage
To run an example, navigate to the pattern's directory and use `ts-node` to execute the `index.ts` file. For example, to run the Proxy pattern example:

```
npx ts-node src/patterns/behavioral/observer/index.ts
```

### Running Tests
Each pattern has its own test file in the tests/ directory.

- To run all tests, use the following command:
```
npm test
```

- To run tests in watch mode, use:
```
npm run test:watch
```

- To generate a test coverage report, use:
```
npm run test:coverage
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the existing style and includes tests where applicable.

- Create a feature branch.
- Implement the pattern.
- Add tests.
- Update documentation.
- Submit a pull request.

### Best Practices
- Follow SOLID principles.
- Write comprehensive tests.
- Document pattern usage.
- Include real-world examples.
- Maintain consistent structure.

### Additional Resources
- Design Patterns Book (Gang of Four)
- TypeScript Documentation
- Jest Testing Framework
- SOLID Principles

## Conclusion

This project provides a practical example of the Proxy Design Pattern, demonstrating how to manage access to resources efficiently. The pattern is useful in scenarios where resource-intensive operations need to be controlled or optimized.

Feel free to explore the code and modify it to suit your needs. If you have any questions or feedback, please reach out!
