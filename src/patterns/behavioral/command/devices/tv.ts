import { IDevice } from "../interfaces/device";

/**
 * Implementation of a TV device.
 */
export class TV implements IDevice {
  turnOn(): void {
    console.log("TV is turned ON.");
  }

  turnOff(): void {
    console.log("TV is turned OFF.");
  }
}