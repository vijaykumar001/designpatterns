/**
 * Interface for the Notification class.
 * 
 * @interface
 * @exports {Notification} - The Notification interface
 */
export interface Notification {
    send(message: string): void;
}