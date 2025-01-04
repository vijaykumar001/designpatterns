import { VisitorInterface } from "../interface/visitorInterface";
import { Element } from "../interface/element";

export class PartTimeEmployee implements Element {
    constructor(public name: string, public salary: number) {}

    accept(visitor: VisitorInterface): void {
        visitor.visitPartTimeEmployee(this);
    }
}
