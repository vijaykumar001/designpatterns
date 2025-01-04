import { FileSystemItem } from '../interface/fileSystemItem';

/**
 * Class representing a directory in the file system.
 */
export class Directory implements FileSystemItem {
    private name: string; // Name of the directory
    private items: FileSystemItem[] = []; // Array to hold files and subdirectories

    constructor(name: string) {
        this.name = name;
    }

    add(item: FileSystemItem): void {
        this.items.push(item); // Add a file or directory to the directory
    }

    getName(): string {
        return this.name; // Return the name of the directory
    }

    getSize(): number {
        // Calculate the total size of all items in the directory
        return this.items.reduce((total, item) => total + item.getSize(), 0);
    }

    print(indent: string): void {
        console.log(`${indent}Directory: ${this.name}`); // Print directory name
        this.items.forEach(item => item.print(indent + '  ')); // Print each item in the directory
    }
}
