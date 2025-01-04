/**
 * NotificationStrategy interface defines the contract for notification strategies.
 * Implementing classes must provide a method to send notifications.
 */
export interface NotificationStrategy {
    sendNotification(recipient: string, message: string): Promise<void>;
}