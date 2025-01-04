import { LoggerChain } from "./implementation/loggerChain";
import { LogLevel } from "./enums/logLevel";

/**
 * Entry point for the Chain-of-Responsibility pattern.
 * 
 * @returns {LoggerChain} The chain of loggers.
 */
const loggerChain = LoggerChain.createLoggerChain();

// Example usage
loggerChain.log(LogLevel.DEBUG, "This is a debug message.");
loggerChain.log(LogLevel.INFO, "This is an info message.");
loggerChain.log(LogLevel.ERROR, "This is an error message.");