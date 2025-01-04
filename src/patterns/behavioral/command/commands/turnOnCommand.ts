import { ICommand } from "../interfaces/command";
import { IDevice } from "../interfaces/device";

/**
 * Command to turn on a device.
 */
export class TurnOnCommand implements ICommand {
  constructor(private device: IDevice) {}

  execute(): void {
    this.device.turnOn();
  }

  undo(): void {
    this.device.turnOff();
  }
}