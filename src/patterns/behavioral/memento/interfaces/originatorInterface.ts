import { Memento } from "./mementoInterface";

/**
 * Originator Interface
 * Represents an object that can save and restore its state.
 */
export interface Originator {
    save(): Memento;
    restore(memento: Memento): void;
  }