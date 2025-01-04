import { Report, Invoice } from '../../../src/patterns/creational/prototype/index'; 

describe('Document Prototype', () => {
it('should clone a Report', () => {
const report = new Report('Monthly Report', 'Content of the monthly report.');
const clonedReport = report.clone();
expect(clonedReport.getDetails()).toBe('Report Title: Monthly Report, Content: Content of the monthly report.');
});
it('should clone an Invoice', () => {
const invoice = new Invoice('INV-67890', 150.00);
const clonedInvoice = invoice.clone();
expect(clonedInvoice.getDetails()).toBe('Invoice Number: INV-67890, Amount: $150');
});
});