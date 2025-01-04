# Command Design Pattern - Home Automation

## Overview
This example demonstrates the Command Design Pattern in a home automation system where devices like lights, fans, and TVs are controlled remotely. Commands are encapsulated, allowing the system to support undo/redo functionality.

## Problem:
In a home automation system, multiple devices like lights, fans, and TVs need to be controlled remotely. The system should support executing commands (e.g., turn on/off, change settings) while maintaining loose coupling between the sender (remote control) and receivers (devices). Additionally, the system should support undo/redo operations for each command.

## Solution:
Using the Command Design Pattern, encapsulate device actions into command objects. This allows the sender to issue commands without knowing the specific device implementation and enables undo/redo functionality.

## Directory Structure
- **src**: Contains the implementation of the Command Design Pattern.
- **tests**: Contains test cases for the implementation.

## Usage
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the tests:
   ```bash
   npm test
   ```

```ts
// src/patterns/structural/command/index.ts
import { Light } from "./devices/light";
import { Fan } from "./devices/fan";
import { TV } from "./devices/tv";
import { TurnOnCommand } from "./commands/turnOnCommand";
import { TurnOffCommand } from "./commands/turnOffCommand";
import { RemoteControl } from "./remoteControl";

/**
 * Entry point for the Command Design Pattern.
 */
const remoteControl = new RemoteControl();

const light = new Light();
const fan = new Fan();
const tv = new TV();

const lightOn = new TurnOnCommand(light);
const lightOff = new TurnOffCommand(light);

const fanOn = new TurnOnCommand(fan);
const fanOff = new TurnOffCommand(fan);

remoteControl.executeCommand(lightOn); // Light is turned ON.
remoteControl.executeCommand(fanOn); // Fan is turned ON.
remoteControl.undoLastCommand(); // Fan is turned OFF.
remoteControl.executeCommand(lightOff); // Light is turned OFF.


// tests/behavioral/command/remoteControl.test.ts
import { RemoteControl } from "../../../src/patterns/behavioral/command/implementation/remoteControl";
import { Light } from "../../../src/patterns/behavioral/command/devices/light";
import { TurnOnCommand } from "../../../src/patterns/behavioral/command/commands/turnOnCommand";
import { TurnOffCommand } from "../../../src/patterns/behavioral/command/commands/turnOffCommand";

describe("Remote Control with Command Pattern", () => {
  it("should execute and undo commands", () => {
    const remoteControl = new RemoteControl();
    const light = new Light();

    const lightOn = new TurnOnCommand(light);
    const lightOff = new TurnOffCommand(light);

    console.log = jest.fn();

    remoteControl.executeCommand(lightOn);
    remoteControl.undoLastCommand();
    remoteControl.executeCommand(lightOff);

    expect(console.log).toHaveBeenCalledWith("Light is turned ON.");
    expect(console.log).toHaveBeenCalledWith("Light is turned OFF.");
  });
});
```



## Explanation
- **Command**: An interface that defines the execute and undo methods.
- **ConcreteCommand**: Implements the Command interface and encapsulates a request.
- **Receiver**: The object that performs the action.
- **Invoker**: The object that requests the command to be executed.
- **Client**: The object that creates the command and sets its receiver.

## Components
- Enums: Defines device types.
- Interfaces: Specifies the command and device contracts.
- Devices: Implements specific device behavior.
- Commands: Encapsulates actions for devices.
- RemoteControl: Executes and manages commands.

## Example Output
- Light is turned ON.
- Fan is turned ON.
- Fan is turned OFF.
- Light is turned OFF.


### Summary
This implementation demonstrates the Command pattern by encapsulating device control actions in separate command classes. The remote control acts as an invoker, executing commands and managing a history of executed commands. This design allows for easy addition of new commands and supports undo/redo functionality.
