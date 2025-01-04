import { VisitorInterface } from "../interface/visitorInterface";
import { Employee } from "../elements/employee";
import { Contractor } from "../elements/contractor";
import { PartTimeEmployee } from "../elements/partTimeEmployee";

export class BonusVisitor implements VisitorInterface {
    visitEmployee(employee: Employee): void {
        console.log(`${employee.name} (Employee) yearly bonus: ${employee.salary * 0.1}`);
    }

    visitContractor(contractor: Contractor): void {
        console.log(`${contractor.name} (Contractor) yearly bonus: ${contractor.hourlyRate * 100}`);
    }

    visitPartTimeEmployee(partTimeEmployee: PartTimeEmployee): void {
        console.log(`${partTimeEmployee.name} (Part-Time Employee) yearly bonus: ${partTimeEmployee.salary * 0.05}`);
    }
}
