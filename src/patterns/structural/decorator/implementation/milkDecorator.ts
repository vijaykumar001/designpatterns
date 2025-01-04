import { Coffee } from '../interface/coffee';

/**
 * Class representing a milk decorator for coffee.
 */
export class MilkDecorator implements Coffee {
    private coffee: Coffee; // The coffee to be decorated

    constructor(coffee: Coffee) {
        this.coffee = coffee; // Initialize with the coffee object
    }

    cost(): number {
        return this.coffee.cost() + 1; // Add cost of milk
    }

    description(): string {
        return `${this.coffee.description()}, Milk`; // Add milk to the description
    }
}
