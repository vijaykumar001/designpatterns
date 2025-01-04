# Prototype Pattern

This project demonstrates the Prototype Design Pattern in TypeScript by creating and cloning different types of documents (Reports and Invoices).

## Directory Structure
- `src/patterns/creational/prototype/`: Contains the implementation of the Prototype pattern.
- `tests/creational/prototype/`: Contains the test cases for the prototype implementation.

## Usage
1. Run the `index.ts` file to see the cloning of documents in action.
2. The `Document` interface allows for flexible cloning of different document types.

## Example
```ts
import { Report } from './implementation/report';
import { Invoice } from './implementation/invoice';

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
```

### 6. documentPrototype.test.ts
```ts
typescript:tests/creational/prototype/documentPrototype.test.ts
// tests/creational/prototype/documentPrototype.test.ts
import { Report } from '../../src/patterns/creational/prototype/implementation/report';
import { Invoice } from '../../src/patterns/creational/prototype/implementation/invoice';
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
```

### Summary
This implementation demonstrates the Prototype Design Pattern by allowing the cloning of different document types (Reports and Invoices) without the need to create new instances from scratch. The code adheres to SOLID principles, ensuring maintainability and scalability.