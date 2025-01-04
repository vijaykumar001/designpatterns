import { Character } from '../interface/character';

/**
 * Class representing a flyweight character with shared state.
 */
export class CharacterFlyweight implements Character {
    private readonly font: string; // Shared state: font
    private readonly size: number; // Shared state: size
    private readonly color: string; // Shared state: color
    private readonly symbol: string; // Unique state: character symbol

    constructor(symbol: string, font: string, size: number, color: string) {
        this.symbol = symbol; // Initialize unique state
        this.font = font; // Initialize shared state
        this.size = size; // Initialize shared state
        this.color = color; // Initialize shared state
    }

    display(position: number): void {
        console.log(`Character: ${this.symbol}, Font: ${this.font}, Size: ${this.size}, Color: ${this.color}, Position: ${position}`);
    }
}