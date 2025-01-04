import { SimpleCoffee } from './implementation/simpleCoffee';
import { MilkDecorator } from './implementation/milkDecorator';
import { SugarDecorator } from './implementation/sugarDecorator';
import { WhippedCreamDecorator } from './implementation/whippedCreamDecorator';
import { Coffee } from './interface/coffee';
/**
 * Main entry point for the decorator implementation.
 * 
 * @module
 * @exports {SimpleCoffee} - The SimpleCoffee class
 * @exports {MilkDecorator} - The MilkDecorator class
 * @exports {SugarDecorator} - The SugarDecorator class
 * @exports {WhippedCreamDecorator} - The WhippedCreamDecorator class
 */
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