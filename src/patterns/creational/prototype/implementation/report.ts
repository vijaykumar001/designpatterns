import { Document } from '../interface/document';

/**
 * Implementation of the Report prototype.
 * 
 * @class
 * @implements {Document}
 */
export class Report implements Document {
    private title: string;
    private content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    clone(): Document {
        return new Report(this.title, this.content);
    }

    getDetails(): string {
        return `Report Title: ${this.title}, Content: ${this.content}`;
    }
}
