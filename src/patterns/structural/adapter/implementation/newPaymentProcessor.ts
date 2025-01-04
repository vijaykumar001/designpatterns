import { PaymentProcessor } from '../interface/paymentProcessor';

export class NewPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} through the new payment system.`);
    }
}
