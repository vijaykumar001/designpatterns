import { PaymentProcessor } from '../interface/paymentProcessor';
/**
 * Class for the NewPaymentProcessor class.
 * 
 * @class
 * @implements {PaymentProcessor}
 */
export class NewPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} through the new payment system.`);
    }
}
