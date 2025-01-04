import { DvdPlayer } from './dvdPlayer';
import { Projector } from './projector';
import { SoundSystem } from './soundSystem';
import { HomeTheaterFacade } from '../interface/homeTheaterFacade';

/**
 * Class representing the facade for the home theater system.
 */
export class HomeTheater implements HomeTheaterFacade {
    private dvdPlayer: DvdPlayer;
    private projector: Projector;
    private soundSystem: SoundSystem;

    constructor() {
        this.dvdPlayer = new DvdPlayer();
        this.projector = new Projector();
        this.soundSystem = new SoundSystem();
    }

    watchMovie(movie: string): void {
        console.log('Getting ready to watch a movie...');
        this.projector.turnOn(); // Turn on the projector
        this.soundSystem.turnOn(); // Turn on the sound system
        this.soundSystem.setVolume(5); // Set volume
        this.dvdPlayer.insertMovie(movie); // Insert the movie
        this.projector.setInput('DVD'); // Set input to DVD
        this.dvdPlayer.play(); // Play the movie
    }

    endMovie(): void {
        console.log('Shutting down the home theater...');
        this.dvdPlayer.stop(); // Stop the movie
        this.soundSystem.turnOff(); // Turn off the sound system
        this.projector.turnOff(); // Turn off the projector
    }
}
