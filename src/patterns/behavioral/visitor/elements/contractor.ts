import { VisitorInterface } from "../interface/visitorInterface";
import { Element } from "../interface/element";

export class Contractor implements Element {
    constructor(public name: string, public hourlyRate: number) {}

    accept(visitor: VisitorInterface): void {
        visitor.visitContractor(this);
    }
}
