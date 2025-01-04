import { ILogger } from "../interfaces/logger";
import { LogLevel } from "../enums/logLevel";

/**
 * A logger that handles console logs.
 */
export class ConsoleLogger implements ILogger {
  private nextLogger: ILogger | null = null;

  setNext(logger: ILogger): ILogger {
    this.nextLogger = logger;
    return logger;
  }

  log(level: LogLevel, message: string): void {
    if (level === LogLevel.DEBUG || level === LogLevel.INFO) {
      console.log(`[ConsoleLogger]: ${message}`);
    }
    if (this.nextLogger) {
      this.nextLogger.log(level, message);
    }
  }
}
