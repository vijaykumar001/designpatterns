/**
 * Participant Interface
 * Represents participants communicating through a mediator.
 */
export interface ParticipantInterface {
    name: string;
    send(message: string): void;
    receive(message: string, sender: string): void;
  }