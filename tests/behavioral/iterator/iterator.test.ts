import { Employee } from "../../../src/patterns/behavioral/iterator/models/employee";
import { EmployeeCollection } from "../../../src/patterns/behavioral/iterator/implementations/employeeCollection";

describe("Iterator Design Pattern", () => {
  it("should iterate over a collection of employees", () => {
    const collection = new EmployeeCollection();
    collection.addEmployee(new Employee(1, "John Doe", "Developer"));
    collection.addEmployee(new Employee(2, "Jane Smith", "Designer"));

    const iterator = collection.createIterator();

    const result: string[] = [];
    while (iterator.hasNext()) {
      const employee = iterator.next();
      if (employee) {
        result.push(`${employee.id}: ${employee.name} - ${employee.position}`);
      }
    }

    expect(result).toEqual([
      "1: John Doe - Developer",
      "2: Jane Smith - Designer",
    ]);
  });

  it("should return null when no more elements are present", () => {
    const collection = new EmployeeCollection();
    const iterator = collection.createIterator();

    expect(iterator.next()).toBeNull();
  });
});