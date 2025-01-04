import { Report } from './implementation/report';
import { Invoice } from './implementation/invoice';
/**
 * Main entry point for the prototype implementation.
 * 
 * @module
 * @exports {Report} - The Report class
 * @exports {Invoice} - The Invoice class
 */
function clientCode() {
    const report = new Report('Annual Report', 'This is the content of the annual report.');
    const clonedReport = report.clone();
    console.log(clonedReport.getDetails());

    const invoice = new Invoice('INV-12345', 250.00);
    const clonedInvoice = invoice.clone();
    console.log(clonedInvoice.getDetails());
}

// Example usage
clientCode();