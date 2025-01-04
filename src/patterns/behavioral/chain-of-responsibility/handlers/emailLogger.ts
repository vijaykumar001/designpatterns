import { ILogger } from "../interfaces/logger";
import { LogLevel } from "../enums/logLevel";

/**
 * A logger that handles email notifications for errors.
 */
export class EmailLogger implements ILogger {
  private nextLogger: ILogger | null = null;

  setNext(logger: ILogger): ILogger {
    this.nextLogger = logger;
    return logger;
  }

  log(level: LogLevel, message: string): void {
    if (level === LogLevel.ERROR) {
      console.log(`[EmailLogger]: Sending email - ${message}`);
    }
    if (this.nextLogger) {
      this.nextLogger.log(level, message);
    }
  }
}
