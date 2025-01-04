/**
 * State Interface
 * Defines the contract for all states.
 */
export interface State {
    next(): State;
    previous(): State;
    printStatus(): void;
}