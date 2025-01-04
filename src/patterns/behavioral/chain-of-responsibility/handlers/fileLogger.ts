import { ILogger } from "../interfaces/logger";
import { LogLevel } from "../enums/logLevel";

/**
 * A logger that handles file logs.
 */
export class FileLogger implements ILogger {
  private nextLogger: ILogger | null = null;

  setNext(logger: ILogger): ILogger {
    this.nextLogger = logger;
    return logger;
  }

  log(level: LogLevel, message: string): void {
    if (level === LogLevel.INFO) {
      console.log(`[FileLogger]: Writing to file - ${message}`);
    }
    if (this.nextLogger) {
      this.nextLogger.log(level, message);
    }
  }
}
