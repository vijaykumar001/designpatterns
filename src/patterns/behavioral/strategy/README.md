# Strategy Pattern for OTP Notifications

This project demonstrates the Strategy Pattern to send OTP notifications via WhatsApp, Mobile SMS, or Email.

## Features

- Flexible notification methods (WhatsApp, SMS, Email).
- Interchangeable algorithms using Strategy Pattern.
- Implements SOLID principles.

## Problem Statement


## Implementation


## How to run the tests:
1. Install dependencies:
   npm install
2. Run the Example
   ts-node src/patterns/behavioral/strategy/index.ts
3. Run the tests:
   npm test

## Usage
```ts
// src/patterns/behavioral/strategy/index.ts
import { NotificationContext } from './implementation/notificationContext';
import { WhatsAppNotification } from './implementation/whatsAppNotification';
import { MobileNotification } from './implementation/mobileNotification';
import { EmailNotification } from './implementation/emailNotification';

(async () => {
  const whatsappStrategy = new WhatsAppNotification();
  const mobileStrategy = new MobileNotification();
  const emailStrategy = new EmailNotification();

  const context = new NotificationContext(whatsappStrategy);
  
  console.log('Sending WhatsApp OTP...');
  await context.notify('recipient_whatsapp_number', 'Your OTP is 123456');

  console.log('Switching to Mobile SMS...');
  context.setStrategy(mobileStrategy);
  await context.notify('recipient_mobile_number', 'Your OTP is 123456');

  console.log('Switching to Email...');
  context.setStrategy(emailStrategy);
  await context.notify('recipient_email@example.com', 'Your OTP is 123456');
})();
```

## Expected Output
```
Sending WhatsApp OTP...
Sending WhatsApp notification to recipient_whatsapp_number: Your OTP is 123456
Switching to Mobile SMS...
Sending Mobile SMS notification to recipient_mobile_number: Your OTP is 123456
Switching to Email...
Sending Email notification to recipient_email@example.com: Your OTP is 123456
```

## Tests Cases - Test Snippet (from strategy.test.ts)
```ts
// tests/behavioral/strategy/strategy.test.ts

import { NotificationContext } from '../../../src/patterns/behavioral/strategy/implementation/notificationContext';
import { WhatsAppNotification } from '../../../src/patterns/behavioral/strategy/implementation/whatsAppNotification';
import { MobileNotification } from '../../../src/patterns/behavioral/strategy/implementation/mobileNotification';
import { EmailNotification } from '../../../src/patterns/behavioral/strategy/implementation/emailNotification';

describe('NotificationContext with Strategy Pattern', () => {
  it('should send WhatsApp notification', async () => {
    const whatsappStrategy = new WhatsAppNotification();
    const context = new NotificationContext(whatsappStrategy);

    await expect(
      context.notify('recipient_whatsapp_number', 'Test WhatsApp Message')
    ).resolves.not.toThrow();
  });

  it('should send Mobile SMS notification', async () => {
    const mobileStrategy = new MobileNotification();
    const context = new NotificationContext(mobileStrategy);

    await expect(
      context.notify('recipient_mobile_number', 'Test SMS Message')
    ).resolves.not.toThrow();
  });

  it('should send Email notification', async () => {
    const emailStrategy = new EmailNotification();
    const context = new NotificationContext(emailStrategy);

    await expect(
      context.notify('recipient_email@example.com', 'Test Email Message')
    ).resolves.not.toThrow();
  });
});

```

## Benefits
1. Open/Closed: Easily add new strategies without modifying existing code.
2. Behavior Encapsulation: Strategies encapsulate their behavior, making them interchangeable.
3. Separation of Concerns: Each strategy handles a specific task, promoting a clean and modular design. 


### Summary
The Strategy Pattern is a powerful design pattern that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern is particularly useful when you have multiple ways to perform the same task and you want to allow clients to choose the one they need at runtime.
