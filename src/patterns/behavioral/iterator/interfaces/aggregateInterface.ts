import { Iterator } from "./iteratorInterface";

/**
 * Aggregate Interface
 * Provides a method to create an iterator for a collection.
 */
export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}
