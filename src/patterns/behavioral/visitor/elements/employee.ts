import { VisitorInterface } from "../interface/visitorInterface";
import { Element } from "../interface/element";

export class Employee implements Element {
    constructor(public name: string, public salary: number) {}

    accept(visitor: VisitorInterface): void {
        visitor.visitEmployee(this);
    }
}
