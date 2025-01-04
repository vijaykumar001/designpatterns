import { Image } from '../interface/image';
import { RealImage } from './realImage';

/**
 * Class representing a proxy for the real image.
 * It manages access to the real image and implements caching.
 */
export class ImageProxy implements Image {
    private realImage: RealImage | null = null; // The real image (if loaded)
    private filename: string; // Name of the image file

    constructor(filename: string) {
        this.filename = filename; // Initialize with the image filename
    }

    display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename); // Load the real image on first access
        }
        this.realImage.display(); // Delegate the display call to the real image
    }
}
