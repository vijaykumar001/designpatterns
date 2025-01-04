import { Light } from "./devices/light";
import { Fan } from "./devices/fan";
import { TV } from "./devices/tv";
import { TurnOnCommand } from "./commands/turnOnCommand";
import { TurnOffCommand } from "./commands/turnOffCommand";
import { RemoteControl } from "./implementation/remoteControl";

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