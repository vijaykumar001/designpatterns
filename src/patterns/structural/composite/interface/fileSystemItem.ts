/**
 * Interface representing a file system item (either a file or a directory).
 */
export interface FileSystemItem {
    getName(): string; // Method to get the name of the item
    getSize(): number; // Method to get the size of the item
    print(indent: string): void; // Method to print the item details
}
