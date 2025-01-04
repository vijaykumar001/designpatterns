/**
 * Class representing a projector in the home theater system.
 */
export class Projector {
    turnOn(): void {
        console.log('Projector: Projector turned on.'); // Turn on the projector
    }

    turnOff(): void {
        console.log('Projector: Projector turned off.'); // Turn off the projector
    }

    setInput(input: string): void {
        console.log(`Projector: Input set to ${input}.`); // Set the input source for the projector
    }
}
