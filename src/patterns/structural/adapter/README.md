# Adapter Pattern

This project demonstrates the Adapter Design Pattern in TypeScript by integrating a legacy payment system with a new payment processing system.

## Directory Structure
- `src/patterns/structural/adapter/`: Contains the implementation of the Adapter pattern.
- `tests/structural/adapter/`: Contains the test cases for the adapter implementation.

## Usage
1. Run the 'index.ts' file to see how the legacy and new payment systems work together through the adapter.
2. The `PaymentProcessor` interface allows for flexible payment processing.

## Example
```ts
// src/patterns/structural/adapter/index.ts
import { LegacyPaymentProcessor } from './implementation/legacyPaymentProcessor';
import { NewPaymentProcessor } from './implementation/newPaymentProcessor';
import { PaymentAdapter } from './implementation/paymentAdapter';

function clientCode() {
    const legacyProcessor = new LegacyPaymentProcessor();
    legacyProcessor.pay(100);

    const newProcessor = new NewPaymentProcessor();
    const adapter = new PaymentAdapter(newProcessor);
    adapter.pay(200);
}

// Example usage
clientCode();
```

### 7. paymentAdapter.test.ts
```ts
// tests/structural/adapter/paymentAdapter.test.ts
import { PaymentAdapter } from '../../src/patterns/structural/adapter/implementation/paymentAdapter';
import { NewPaymentProcessor } from '../../src/patterns/structural/adapter/implementation/newPaymentProcessor';
describe('PaymentAdapter', () => {
it('should process payment using the new payment processor', () => {
const newProcessor = new NewPaymentProcessor();
const adapter = new PaymentAdapter(newProcessor);
const consoleSpy = jest.spyOn(console, 'log');
adapter.pay(150);
expect(consoleSpy).toHaveBeenCalledWith('Processing payment of $150 through the new payment system.');
consoleSpy.mockRestore();
});
});
```

### Summary
This implementation demonstrates the Adapter Design Pattern by allowing a legacy payment system to work with a new payment processing system through an adapter.
The code adheres to SOLID principles, ensuring maintainability and scalability.