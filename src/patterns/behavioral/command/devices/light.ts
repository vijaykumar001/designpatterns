import { IDevice } from "../interfaces/device";

/**
 * Implementation of a light device.
 */
export class Light implements IDevice {
  turnOn(): void {
    console.log("Light is turned ON.");
  }

  turnOff(): void {
    console.log("Light is turned OFF.");
  }
}