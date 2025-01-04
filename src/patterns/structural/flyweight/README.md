# Flyweight Pattern

This project demonstrates the Flyweight Design Pattern in TypeScript by managing a large number of characters in a text editor.

## Directory Structure
- `src/patterns/structural/fly-weight/`: Contains the implementation of the Flyweight pattern.
- `tests/structural/fly-weight/`: Contains the test cases for the flyweight implementation.

## Usage
1. Run the `index.ts` file to see how characters can be managed with shared state.
2. The `Character` interface allows for flexible character creation, while the factory manages the shared instances.

## Example
```ts
import { CharacterFactory } from './implementation/characterFactory';

function clientCode() {
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
```
# Expected Output
```
Character: A, Font: Arial, Size: 12, Color: black, Position: 0
Character: B, Font: Arial, Size: 12, Color: black, Position: 1
Character: C, Font: Arial, Size: 12, Color: black, Position: 2
Character: A, Font: Arial, Size: 12, Color: black, Position: 3
true
```

6. **flyweightPattern.test.ts**
```ts
typescript
// tests/structural/fly-weight/flyweightPattern.test.ts
import { CharacterFactory } from '../../src/patterns/structural/fly-weight/implementation/characterFactory';
import { CharacterFlyweight } from '../../src/patterns/structural/fly-weight/implementation/characterFlyweight';
describe('Flyweight Pattern', () => {
it('should create and reuse flyweight characters', () => {
const factory = new CharacterFactory();
const a1 = factory.getCharacter('A', 'Arial', 12, 'black');
const a2 = factory.getCharacter('A', 'Arial', 12, 'black');
expect(a1).toBe(a2); // Both should reference the same instance
});
it('should create different characters with unique states', () => {
const factory = new CharacterFactory();
const a = factory.getCharacter('A', 'Arial', 12, 'black');
const b = factory.getCharacter('B', 'Arial', 12, 'black');
expect(a).not.toBe(b); // Different instances for different characters
});
});
```

### Summary
This implementation demonstrates the Flyweight Design Pattern by managing a large number of characters in a text editor while minimizing memory usage. The code adheres to SOLID principles, ensuring maintainability and scalability.