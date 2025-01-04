import { PaymentProcessor } from '../interface/paymentProcessor';
import { NewPaymentProcessor } from './newPaymentProcessor';
/*
* PaymentAdapter
*
* This class adapts the NewPaymentProcessor to the PaymentProcessor interface.
* It allows the legacy system to work with the new payment system.
* It is a structural pattern.
* It is a design pattern that allows two incompatible interfaces to work together.
* It is a design pattern that allows classes to work together that could not otherwise because of incompatible interfaces.
*/
export class PaymentAdapter implements PaymentProcessor {
    private newPaymentProcessor: NewPaymentProcessor;

    constructor(newPaymentProcessor: NewPaymentProcessor) {
        this.newPaymentProcessor = newPaymentProcessor;
    }

    pay(amount: number): void {
        this.newPaymentProcessor.processPayment(amount);
    }
}
