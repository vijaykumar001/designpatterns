# Notification Factory Pattern

This project demonstrates the Factory Design Pattern in TypeScript by creating different types of notifications (Email, SMS, Push).

## Directory Structure
- `src/patterns/creational/factory/`: Contains the implementation of the Factory pattern.
- `tests/creational/factory/`: Contains the test cases for the factory implementation.

## Usage
1. Import the `NotificationFactory` and create notifications based on type.
2. Call the `send` method on the created notification object.

## Example
```ts
import { NotificationFactory } from './src/patterns/creational/factory/NotificationFactory';
const notification = NotificationFactory.createNotification('email');
notification.send('Hello, this is a test email!');
```

### Summary
This implementation demonstrates the Factory Design Pattern by allowing the creation of different notification types based on user input. The code adheres to SOLID principles, ensuring maintainability and scalability. The README file provides clear instructions on how to use the factory, and the test cases ensure that the factory behaves as expected.
