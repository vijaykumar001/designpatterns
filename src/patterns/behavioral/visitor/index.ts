// Entry point for the visitor design pattern
import { Employee } from "./elements/employee";
import { Contractor } from "./elements/contractor";
import { PartTimeEmployee } from "./elements/partTimeEmployee";
import { BonusVisitor } from "./implementation/visitor";

// Create employee objects
const employees = [
    new Employee("Alice", 50000),
    new PartTimeEmployee("Bob", 20000),
    new Contractor("Charlie", 30000),
];

// Create a visitor
const bonusVisitor = new BonusVisitor();

// Apply visitor to each employee
employees.forEach((employee) => {
    employee.accept(bonusVisitor);
});
