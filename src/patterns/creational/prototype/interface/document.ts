/**
 * Interface for the Document prototype.
 * 
 * @interface
 * @exports {Document} - The Document interface
 */
export interface Document {
    clone(): Document;
    getDetails(): string;
}
