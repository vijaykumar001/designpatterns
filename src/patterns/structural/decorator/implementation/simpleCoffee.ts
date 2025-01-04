import { Coffee } from '../interface/coffee';

/**
 * Class representing a simple coffee.
 */
export class SimpleCoffee implements Coffee {
    cost(): number {
        return 5; // Base cost of simple coffee
    }

    description(): string {
        return 'Simple Coffee'; // Description of simple coffee
    }
}
