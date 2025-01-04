/**
 * Iterator Interface
 * Provides methods for iterating over a collection.
 */
export interface Iterator<T> {
    hasNext(): boolean;
    next(): T | null;
}