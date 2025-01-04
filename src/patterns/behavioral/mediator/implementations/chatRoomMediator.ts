import { Mediator } from "../interfaces/mediatorInterface";
import { ParticipantInterface } from "../interfaces/participantInterface";

/**
 * ChatRoomMediator Class
 * Implements the Mediator interface for managing communication between users.
 */
export class ChatRoomMediator implements Mediator {
  private participants: ParticipantInterface[] = [];

  registerParticipant(participant: ParticipantInterface): void {
    this.participants.push(participant);
  }

  sendMessage(message: string, sender: ParticipantInterface): void {
    for (const participant of this.participants) {
      if (participant !== sender) {
        participant.receive(message, sender.name);
      }
    }
  }
}