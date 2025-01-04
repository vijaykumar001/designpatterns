// Represents an element that can be visited by a visitor
import { VisitorInterface } from "./visitorInterface";

export interface Element {
    accept(visitor: VisitorInterface): void;
}
