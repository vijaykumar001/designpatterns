# Chain of Responsibility Pattern - Logging System

## Problem:
Developing an enterprise-level logging system for a distributed application. The system needs to process logs of different severities (e.g., DEBUG, INFO, ERROR) and handle them differently. Logs must pass through various handlers (e.g., ConsoleLogger, FileLogger, EmailLogger) based on their severity, with the ability to modify or add new loggers easily in the future.

## Solution:
Using the Chain-of-Responsibility Design Pattern, each logger will process the log if its severity matches and pass it to the next logger in the chain. This approach ensures extensibility and decouples the logging logic.


## Overview
This example demonstrates the Chain of Responsibility pattern for a logging system with log levels (DEBUG, INFO, ERROR). Each handler processes the log if it matches its level and forwards it to the next handler.

## Directory Structure
- **src**: Contains the implementation of the pattern.
- **tests**: Contains test cases for the implementation.

## Usage
1. Install dependencies:
    npm install
2. Run the tests:
    npm start
3. Run the tests:
    npm test


```ts
// src/patterns/behavioral/chain-of-responsibility/index.ts
import { LoggerChain } from "./implementation/loggerChain";
import { LogLevel } from "./enums/logLevel";

/**
 * Entry point for the Chain-of-Responsibility pattern.
 */
const loggerChain = LoggerChain.createLoggerChain();

// Example usage
loggerChain.log(LogLevel.DEBUG, "This is a debug message.");
loggerChain.log(LogLevel.INFO, "This is an info message.");
loggerChain.log(LogLevel.ERROR, "This is an error message.");
```



```ts
// tests/behavioral/chain-of-responsibility/loggerChain.test.ts
import { LoggerChain } from "../../../src/patterns/behavioral/chain-of-responsibility/loggerChain";
import { LogLevel } from "../../../src/patterns/behavioral/chain-of-responsibility/enums/logLevel";

describe("Logger Chain", () => {
  it("should process logs through the chain", () => {
    const loggerChain = LoggerChain.createLoggerChain();

    console.log = jest.fn();

    loggerChain.log(LogLevel.DEBUG, "Debug log");
    loggerChain.log(LogLevel.INFO, "Info log");
    loggerChain.log(LogLevel.ERROR, "Error log");

    expect(console.log).toHaveBeenCalledWith("[ConsoleLogger]: Debug log");
    expect(console.log).toHaveBeenCalledWith("[ConsoleLogger]: Info log");
    expect(console.log).toHaveBeenCalledWith("[FileLogger]: Writing to file - Info log");
    expect(console.log).toHaveBeenCalledWith("[EmailLogger]: Sending email - Error log");
  });
});
```


### Summary
This implementation demonstrates the Chain of Responsibility pattern by managing logging messages with different severity levels. The code adheres to SOLID principles, ensuring maintainability and scalability. 