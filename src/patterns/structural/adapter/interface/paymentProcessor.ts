/**
 * Interface for the PaymentProcessor class.
 * 
 * @interface
 * @exports {PaymentProcessor} - The PaymentProcessor interface
 */
export interface PaymentProcessor {
    pay(amount: number): void;
}
