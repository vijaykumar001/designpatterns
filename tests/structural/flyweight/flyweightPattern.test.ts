import { CharacterFactory } from '../../../src/patterns/structural/flyweight/implementation/characterFactory';

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