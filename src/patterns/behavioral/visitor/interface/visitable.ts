// Interface for visitable elements
import { VisitorInterface } from "./visitorInterface";

export interface Visitable {
    accept(visitor: VisitorInterface): void;
}
