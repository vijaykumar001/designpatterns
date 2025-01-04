// Interface for the visitor
import { Employee } from "../elements/employee";
import { Contractor } from "../elements/contractor";
import { PartTimeEmployee } from "../elements/partTimeEmployee";

export interface VisitorInterface {
    visitEmployee(employee: Employee): void;
    visitContractor(contractor: Contractor): void;
    visitPartTimeEmployee(partTimeEmployee: PartTimeEmployee): void;
}
