import { ILogger } from "../interfaces/logger";
import { ConsoleLogger } from "../handlers/consoleLogger";
import { FileLogger } from "../handlers/fileLogger";
import { EmailLogger } from "../handlers/emailLogger";

/**
 * Sets up the logger chain.
 */
export class LoggerChain {
  static createLoggerChain(): ILogger {
    const consoleLogger = new ConsoleLogger();
    const fileLogger = new FileLogger();
    const emailLogger = new EmailLogger();

    consoleLogger.setNext(fileLogger).setNext(emailLogger);

    return consoleLogger;
  }
}
