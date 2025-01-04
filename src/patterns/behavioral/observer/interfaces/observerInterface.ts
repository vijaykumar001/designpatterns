/**
 * Observer Interface
 * Represents an object that gets notified of changes in the subject.
 */
export interface Observer {
    update(stockName: string, price: number): void;
}