import { SimpleCoffee } from '../../../src/patterns/structural/decorator/implementation/simpleCoffee';
import { MilkDecorator } from '../../../src/patterns/structural/decorator/implementation/milkDecorator';
import { SugarDecorator } from '../../../src/patterns/structural/decorator/implementation/sugarDecorator';
import { WhippedCreamDecorator } from '../../../src/patterns/structural/decorator/implementation/whippedCreamDecorator';
/**
 * Test cases for the decorator design pattern.
 */
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