import { Coffee } from '../interface/coffee';

/**
 * Class representing a whipped cream decorator for coffee.
 */
export class WhippedCreamDecorator implements Coffee {
    private coffee: Coffee; // The coffee to be decorated

    constructor(coffee: Coffee) {
        this.coffee = coffee; // Initialize with the coffee object
    }

    cost(): number {
        return this.coffee.cost() + 1.5; // Add cost of whipped cream
    }

    description(): string {
        return `${this.coffee.description()}, Whipped Cream`; // Add whipped cream to the description
    }
}
