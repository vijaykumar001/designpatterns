/**
 * Class representing a sound system in the home theater system.
 */
export class SoundSystem {
    turnOn(): void {
        console.log('Sound System: Sound system turned on.'); // Turn on the sound system
    }

    turnOff(): void {
        console.log('Sound System: Sound system turned off.'); // Turn off the sound system
    }

    setVolume(volume: number): void {
        console.log(`Sound System: Volume set to ${volume}.`); // Set the volume of the sound system
    }
}
