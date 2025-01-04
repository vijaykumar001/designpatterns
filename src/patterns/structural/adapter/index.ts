import { LegacyPaymentProcessor } from './implementation/legacyPaymentProcessor';
import { NewPaymentProcessor } from './implementation/newPaymentProcessor';
import { PaymentAdapter } from './implementation/paymentAdapter';
/**
 * Main entry point for the adapter implementation.
 * 
 * @module
 * @exports {LegacyPaymentProcessor} - The LegacyPaymentProcessor class
 * @exports {NewPaymentProcessor} - The NewPaymentProcessor class
 * @exports {PaymentAdapter} - The PaymentAdapter class
 */
function clientCode() {
    const legacyProcessor = new LegacyPaymentProcessor();
    legacyProcessor.pay(100);

    const newProcessor = new NewPaymentProcessor();
    const adapter = new PaymentAdapter(newProcessor);
    adapter.pay(200);
}

// Example usage
clientCode();