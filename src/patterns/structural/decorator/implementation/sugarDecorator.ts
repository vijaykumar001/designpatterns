import { Coffee } from '../interface/coffee';

/**
 * Class representing a sugar decorator for coffee.
 */
export class SugarDecorator implements Coffee {
    private coffee: Coffee; // The coffee to be decorated

    constructor(coffee: Coffee) {
        this.coffee = coffee; // Initialize with the coffee object
    }

    cost(): number {
        return this.coffee.cost() + 0.5; // Add cost of sugar
    }

    description(): string {
        return `${this.coffee.description()}, Sugar`; // Add sugar to the description
    }
}
