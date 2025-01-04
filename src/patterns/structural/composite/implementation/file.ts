import { FileSystemItem } from '../interface/fileSystemItem';

/**
 * Class representing a file in the file system.
 */
export class File implements FileSystemItem {
    private name: string; // Name of the file
    private size: number; // Size of the file in bytes

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    getName(): string {
        return this.name; // Return the name of the file
    }

    getSize(): number {
        return this.size; // Return the size of the file
    }

    print(indent: string): void {
        console.log(`${indent}File: ${this.name} (${this.size} bytes)`); // Print file details
    }
}
