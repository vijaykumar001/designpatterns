import { Image } from '../interface/image';

/**
 * Class representing a real image that is loaded from a remote server.
 */
export class RealImage implements Image {
    private filename: string; // Name of the image file

    constructor(filename: string) {
        this.filename = filename;
        this.loadImageFromServer(); // Simulate loading the image from a remote server
    }

    private loadImageFromServer(): void {
        console.log(`Loading image: ${this.filename} from server...`);
    }

    display(): void {
        console.log(`Displaying image: ${this.filename}`); // Display the image
    }
}
