import { IDevice } from "../interfaces/device";

/**
 * Implementation of a fan device.
 */
export class Fan implements IDevice {
  turnOn(): void {
    console.log("Fan is turned ON.");
  }

  turnOff(): void {
    console.log("Fan is turned OFF.");
  }
}