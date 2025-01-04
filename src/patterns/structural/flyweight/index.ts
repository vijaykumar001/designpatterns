import { CharacterFactory } from './implementation/characterFactory';
/**
 * Main entry point for the flyweight implementation.
 * 
 * @module
 * @exports {CharacterFactory} - The CharacterFactory class
 */
export function clientCode() {
    const factory = new CharacterFactory();

    // Create characters with shared state
    const a = factory.getCharacter('A', 'Arial', 12, 'black');
    const b = factory.getCharacter('B', 'Arial', 12, 'black');
    const c = factory.getCharacter('C', 'Arial', 12, 'black');

    // Display characters at different positions
    a.display(0); // Character: A, Font: Arial, Size: 12, Color: black, Position: 0
    b.display(1); // Character: B, Font: Arial, Size: 12, Color: black, Position: 1
    c.display(2); // Character: C, Font: Arial, Size: 12, Color: black, Position: 2

    // Reuse the same character with different unique states
    const a2 = factory.getCharacter('A', 'Arial', 12, 'black');
    a2.display(3); // Character: A, Font: Arial, Size: 12, Color: black, Position: 3

    // Check if the same instance is reused
    console.log(a === a2); // true
}

// Example usage
clientCode();