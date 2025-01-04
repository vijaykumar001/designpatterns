import { RemoteControl } from "../../../src/patterns/behavioral/command/implementation/remoteControl";
import { Light } from "../../../src/patterns/behavioral/command/devices/light";
import { TurnOnCommand } from "../../../src/patterns/behavioral/command/commands/turnOnCommand";
import { TurnOffCommand } from "../../../src/patterns/behavioral/command/commands/turnOffCommand";
/*
* This test case demonstrates the Command Design Pattern by simulating a remote control with a light and a fan.
* It tests the execution and undo/redo functionality of the commands.
*/
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
    remoteControl.undoLastCommand(); // Undo: Light is turned ON
    remoteControl.redoLastCommand(); // Redo: Light is turned OFF again


    expect(console.log).toHaveBeenCalledWith("Light is turned ON.");
    expect(console.log).toHaveBeenCalledWith("Light is turned OFF.");
  });
});