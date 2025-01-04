import { ImageProxy } from './implementation/imageProxy';
/**
 * Main entry point for the proxy implementation.
 * 
 * @module
 * @exports {ImageProxy} - The ImageProxy class
 */
function clientCode() {
    const image1: ImageProxy = new ImageProxy('photo1.jpg');
    const image2: ImageProxy = new ImageProxy('photo2.jpg');

    // Display the images
    image1.display(); // Loading image: photo1.jpg from server... Displaying image: photo1.jpg
    image1.display(); // Displaying image: photo1.jpg (from cache)
    image2.display(); // Loading image: photo2.jpg from server... Displaying image: photo2.jpg
    image2.display(); // Displaying image: photo2.jpg (from cache)
}

// Example usage
clientCode();