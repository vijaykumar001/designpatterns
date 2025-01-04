import { Mediator } from "../interfaces/mediatorInterface";
import { ParticipantInterface } from "../interfaces/participantInterface";

/**
 * User Class
 * Represents a participant in the chatroom.
 */
export class User implements ParticipantInterface {
  constructor(public name: string, private mediator: Mediator) {}

  send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, sender: string): void {
    console.log(`${this.name} receives from ${sender}: ${message}`);
  }
}