/**
 * Memento Interface
 * Encapsulates the state of the originator.
 */
export interface Memento {
    getState(): string;
    getTimestamp(): string;
  }