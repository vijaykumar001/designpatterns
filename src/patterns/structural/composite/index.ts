import { File } from './implementation/file';
import { Directory } from './implementation/directory';
/**
 * Main entry point for the composite implementation.
 * 
 * @module
 * @exports {File} - The File class
 * @exports {Directory} - The Directory class
 */
function clientCode() {
    // Create files
    const file1 = new File('file1.txt', 100);
    const file2 = new File('file2.txt', 200);
    const file3 = new File('file3.txt', 300);

    // Create directories
    const directory1 = new Directory('directory1');
    const directory2 = new Directory('directory2');

    // Add files to directories
    directory1.add(file1);
    directory1.add(file2);
    directory2.add(file3);

    // Create a root directory and add subdirectories
    const rootDirectory = new Directory('root');
    rootDirectory.add(directory1);
    rootDirectory.add(directory2);

    // Print the structure of the file system
    rootDirectory.print(''); // Print the entire file system structure
}

// Example usage
clientCode();