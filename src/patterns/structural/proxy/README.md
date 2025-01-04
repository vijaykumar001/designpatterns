# Proxy Pattern

This project demonstrates the Proxy Design Pattern in TypeScript by managing access to images stored on a remote server.

## Directory Structure
- `src/patterns/structural/proxy/`: Contains the implementation of the Proxy pattern.
- `tests/structural/proxy/`: Contains the test cases for the proxy implementation.

## Usage
1. Run the `index.ts` file to see how images can be accessed through a proxy.
2. The `Image` interface allows for flexible image handling, while the proxy manages access and caching.

## Example

```ts
import { ImageProxy } from './implementation/imageProxy';

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
``` 

6. **proxyPattern.test.ts**

```ts
// tests/structural/proxy/proxyPattern.test.ts
import { ImageProxy } from '../../src/patterns/structural/proxy/implementation/imageProxy';
describe('Proxy Pattern', () => {
it('should load and display the image through the proxy', () => {
const imageProxy = new ImageProxy('testImage.jpg');
const consoleSpy = jest.spyOn(console, 'log');
imageProxy.display(); // First call should load the image
expect(consoleSpy).toHaveBeenCalledWith('Loading image: testImage.jpg from server...');
expect(consoleSpy).toHaveBeenCalledWith('Displaying image: testImage.jpg');
imageProxy.display(); // Second call should use the cached image
expect(consoleSpy).toHaveBeenCalledWith('Displaying image: testImage.jpg');
consoleSpy.mockRestore();
});
});
``` 

### Summary
This implementation demonstrates the Proxy Design Pattern by managing access to images stored on a remote server while minimizing network calls through caching. The code adheres to SOLID principles, ensuring maintainability and scalability.