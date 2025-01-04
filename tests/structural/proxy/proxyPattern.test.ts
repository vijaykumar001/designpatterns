import { ImageProxy } from '../../../src/patterns/structural/proxy/index';
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