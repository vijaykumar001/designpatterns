# Decorator Pattern

This project demonstrates the Decorator Design Pattern in TypeScript by allowing the dynamic addition of responsibilities to coffee objects.

## Directory Structure
- `src/patterns/structural/decorator/`: Contains the implementation of the Decorator pattern.
- `tests/structural/decorator/`: Contains the test cases for the decorator implementation.

## Usage
1. Run the `index.ts` file to see how coffee can be customized with various add-ons.
2. The `Coffee` interface allows for flexible coffee creation, while decorators enable dynamic customization.

## Example
```ts
import { SimpleCoffee } from './implementation/simpleCoffee';
import { MilkDecorator } from './implementation/milkDecorator';
import { SugarDecorator } from './implementation/sugarDecorator';
import { WhippedCreamDecorator } from './implementation/whippedCreamDecorator';

function clientCode() {
    // Create a simple coffee
    let coffee: Coffee = new SimpleCoffee();
    console.log(`${coffee.description()} costs $${coffee.cost()}`);

    // Add milk to the coffee
    coffee = new MilkDecorator(coffee);
    console.log(`${coffee.description()} costs $${coffee.cost()}`);

    // Add sugar to the coffee
    coffee = new SugarDecorator(coffee);
    console.log(`${coffee.description()} costs $${coffee.cost()}`);

    // Add whipped cream to the coffee
    coffee = new WhippedCreamDecorator(coffee);
    console.log(`${coffee.description()} costs $${coffee.cost()}`);
}

// Example usage
clientCode();
```

### 8. decoratorPattern.test.ts
```ts
// tests/structural/decorator/decoratorPattern.test.ts
import { SimpleCoffee } from '../../src/patterns/structural/decorator/implementation/simpleCoffee';
import { MilkDecorator } from '../../src/patterns/structural/decorator/implementation/milkDecorator';
import { SugarDecorator } from '../../src/patterns/structural/decorator/implementation/sugarDecorator';
import { WhippedCreamDecorator } from '../../src/patterns/structural/decorator/implementation/whippedCreamDecorator';
describe('Decorator Pattern', () => {
it('should calculate the cost of a simple coffee correctly', () => {
const coffee = new SimpleCoffee();
expect(coffee.cost()).toBe(5); // Base cost of simple coffee
});
it('should calculate the cost of coffee with milk correctly', () => {
const coffee = new MilkDecorator(new SimpleCoffee());
expect(coffee.cost()).toBe(6); // Cost of simple coffee + milk
});
it('should calculate the cost of coffee with sugar correctly', () => {
const coffee = new SugarDecorator(new SimpleCoffee());
expect(coffee.cost()).toBe(5.5); // Cost of simple coffee + sugar
});
it('should calculate the cost of coffee with whipped cream correctly', () => {
const coffee = new WhippedCreamDecorator(new SimpleCoffee());
expect(coffee.cost()).toBe(6.5); // Cost of simple coffee + whipped cream
});
it('should calculate the cost of coffee with multiple decorators correctly', () => {
const coffee = new WhippedCreamDecorator(new SugarDecorator(new MilkDecorator(new SimpleCoffee())));
expect(coffee.cost()).toBe(8); // Cost of simple coffee + milk + sugar + whipped cream
});
});
```

### Summary
This implementation demonstrates the Decorator Design Pattern by allowing the dynamic addition of responsibilities (like milk, sugar, and whipped cream) to coffee objects. The code adheres to SOLID principles, ensuring maintainability and scalability.