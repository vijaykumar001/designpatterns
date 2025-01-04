import { LoggerChain } from "../../../src/patterns/behavioral/chain-of-responsibility/implementation/loggerChain";
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