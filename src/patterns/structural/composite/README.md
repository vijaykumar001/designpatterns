# Composite Pattern

This project demonstrates the Composite Design Pattern in TypeScript by representing a file system with files and directories.

## Directory Structure
- `src/patterns/structural/composite/`: Contains the implementation of the Composite pattern.
- `tests/structural/composite/`: Contains the test cases for the composite implementation.

## Usage
1. Run the `index.ts` file to see how files and directories can be managed uniformly.
2. The `FileSystemItem` interface allows for flexible handling of both files and directories.

## Example
```ts
// src/patterns/structural/composite/index.ts

import { File } from './implementation/file';
import { Directory } from './implementation/directory';

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
```

### 6. compositePattern.test.ts
```ts
// tests/structural/composite/compositePattern.test.ts
import { File } from '../../src/patterns/structural/composite/implementation/file';
import { Directory } from '../../src/patterns/structural/composite/implementation/directory';
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
expect(consoleSpy).toHaveBeenCalledWith(' File: file.txt (150 bytes)');
consoleSpy.mockRestore();
});
});
```

### Summary
This implementation demonstrates the Composite Design Pattern by allowing the representation of a file system where both files and directories can be treated uniformly. The code adheres to SOLID principles, ensuring maintainability and scalability.