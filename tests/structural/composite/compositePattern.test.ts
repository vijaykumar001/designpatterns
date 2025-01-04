import { File, Directory } from '../../../src/patterns/structural/composite/index';

describe('Composite Pattern', () => {
    it('should calculate the size of a directory correctly', () => {
        const file1 = new File('file1.txt', 100);
        const file2 = new File('file2.txt', 200);
        const directory = new Directory('directory');
        directory.add(file1);
        directory.add(file2);

        expect(directory.getSize()).toBe(300); // Total size should be 300 bytes
    });

    it('should print the structure of the file system correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const file = new File('file.txt', 150);
        const directory = new Directory('directory');
        directory.add(file);
        directory.print('');

        expect(consoleSpy).toHaveBeenCalledWith('Directory: directory');
        expect(consoleSpy).toHaveBeenCalledWith('  File: file.txt (150 bytes)'); // This line is correct
        consoleSpy.mockRestore();
    });
});