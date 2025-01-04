import { LogLevel } from "../enums/logLevel";

/**
 * Interface to define the structure of a logger.
 */
export interface ILogger {
    setNext(logger: ILogger): ILogger;
    log(level: LogLevel, message: string): void;
  }