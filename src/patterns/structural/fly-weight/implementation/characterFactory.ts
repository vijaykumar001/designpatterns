import { Character } from '../interface/character';
import { CharacterFlyweight } from './characterFlyweight';

/**
 * Class responsible for managing flyweight characters.
 */
export class CharacterFactory {
    private characters: { [key: string]: CharacterFlyweight } = {}; // Cache for shared characters

    getCharacter(symbol: string, font: string, size: number, color: string): CharacterFlyweight {
        const key = `${symbol}-${font}-${size}-${color}`; // Unique key for each character

        if (!this.characters[key]) {
            this.characters[key] = new CharacterFlyweight(symbol, font, size, color); // Create new flyweight if not exists
        }

        return this.characters[key]; // Return the shared character
    }
}