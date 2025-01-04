/**
 * Class representing a DVD player in the home theater system.
 */
export class DvdPlayer {
    private movie: string = '';

    insertMovie(movie: string): void {
        this.movie = movie; // Insert a movie into the DVD player
        console.log(`DVD Player: Movie "${this.movie}" inserted.`);
    }

    play(): void {
        console.log(`DVD Player: Playing "${this.movie}".`); // Play the inserted movie
    }

    stop(): void {
        console.log(`DVD Player: Stopped playing "${this.movie}".`); // Stop the movie
    }
}
