import { Document } from '../interface/document';

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
