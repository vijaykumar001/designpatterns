import { HomeTheater } from './implementation/homeTheater';
/**
 * Main entry point for the facade implementation.
 * 
 * @module
 * @exports {HomeTheater} - The HomeTheater class
 */
function clientCode() {
    const homeTheater = new HomeTheater();
    homeTheater.watchMovie('Inception'); // Start watching a movie
    homeTheater.endMovie(); // End the movie
}

// Example usage
clientCode();