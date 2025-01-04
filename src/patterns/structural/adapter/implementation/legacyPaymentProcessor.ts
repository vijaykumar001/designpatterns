import { PaymentProcessor } from '../interface/paymentProcessor';
/**
 * Class for the LegacyPaymentProcessor class.
 * 
 * @class
 * @implements {PaymentProcessor}
 */
export class LegacyPaymentProcessor implements PaymentProcessor {
    pay(amount: number): void {
        console.log(`Processing payment of $${amount} through the legacy system.`);
    }
}
