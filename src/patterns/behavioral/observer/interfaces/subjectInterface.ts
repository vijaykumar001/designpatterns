import { Observer } from "./observerInterface";

/**
 * Subject Interface
 * Represents an object that maintains a list of observers and notifies them of changes.
 */
export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}