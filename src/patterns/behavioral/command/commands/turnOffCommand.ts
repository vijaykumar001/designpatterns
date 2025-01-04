import { ICommand } from "../interfaces/command";
import { IDevice } from "../interfaces/device";

/**
 * Command to turn off a device.
 */
export class TurnOffCommand implements ICommand {
  constructor(private device: IDevice) {}

  execute(): void {
    this.device.turnOff();
  }

  undo(): void {
    this.device.turnOn();
  }
}