import { Employee } from "../../../src/patterns/behavioral/visitor/elements/employee";
import { Contractor } from "../../../src/patterns/behavioral/visitor/elements/contractor";
import { PartTimeEmployee } from "../../../src/patterns/behavioral/visitor/elements/partTimeEmployee";
import { BonusVisitor } from "../../../src/patterns/behavioral/visitor/implementation/visitor";
/**
 * Test cases for the visitor design pattern.
 */
describe("Visitor Design Pattern Test", () => {
    it("should calculate bonuses correctly", () => {
        const employees = [
            new Employee("Alice", 50000),
            new PartTimeEmployee("Bob", 20000),
            new Contractor("Charlie", 30000),
        ];

        const bonusVisitor = new BonusVisitor();

        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        employees.forEach((employee) => {
            employee.accept(bonusVisitor);
        });

        expect(consoleSpy).toHaveBeenCalledWith("Alice (Employee) yearly bonus: 5000");
        expect(consoleSpy).toHaveBeenCalledWith("Bob (Part-Time Employee) yearly bonus: 1000");
        expect(consoleSpy).toHaveBeenCalledWith("Charlie (Contractor) yearly bonus: 3000000");

        consoleSpy.mockRestore();
    });
});
