/**
 * Main entry point for the notification factory implementation.
 * 
 * @module
 * @exports {NotificationFactory} - The NotificationFactory singleton
 */
export * from './notificationFactory';
export * from './implementation/emailNotification';
export * from './implementation/smsNotification';
export * from './implementation/pushNotification';
