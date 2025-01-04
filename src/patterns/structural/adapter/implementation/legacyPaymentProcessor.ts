import { PaymentProcessor } from '../interface/paymentProcessor';

export class LegacyPaymentProcessor implements PaymentProcessor {
    pay(amount: number): void {
        console.log(`Processing payment of $${amount} through the legacy system.`);
    }
}
