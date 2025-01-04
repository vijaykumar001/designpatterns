/**
 * Interface representing the facade for the home theater system.
 */
export interface HomeTheaterFacade {
    watchMovie(movie: string): void; // Method to start watching a movie
    endMovie(): void; // Method to end the movie
}
