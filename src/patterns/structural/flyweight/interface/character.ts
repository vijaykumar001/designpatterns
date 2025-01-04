/**
 * Interface representing a character in the text editor.
 */
export interface Character {
    display(position: number): void; // Method to display the character at a specific position
}