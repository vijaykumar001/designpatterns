import { ParticipantInterface } from "./participantInterface";

/**
 * Mediator Interface
 * Defines a method to facilitate communication between participants.
 */
export interface Mediator {
  sendMessage(message: string, sender: ParticipantInterface): void;
  registerParticipant(participant: ParticipantInterface): void;
}