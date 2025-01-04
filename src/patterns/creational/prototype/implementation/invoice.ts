import { Document } from '../interface/document';

/**
 * Implementation of the Invoice prototype.
 * 
 * @class
 * @implements {Document}
 */
export class Invoice implements Document {
    private invoiceNumber: string;
    private amount: number;

    constructor(invoiceNumber: string, amount: number) {
        this.invoiceNumber = invoiceNumber;
        this.amount = amount;
    }

    clone(): Document {
        return new Invoice(this.invoiceNumber, this.amount);
    }

    getDetails(): string {
        return `Invoice Number: ${this.invoiceNumber}, Amount: $${this.amount}`;
    }
}
