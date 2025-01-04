import { Employee } from "./models/employee";
import { EmployeeCollection } from "./implementations/employeeCollection";

/**
 * Entry point for the Iterator Design Pattern example.
 */
const main = () => {
  const collection = new EmployeeCollection();

  collection.addEmployee(new Employee(1, "John Doe", "Developer"));
  collection.addEmployee(new Employee(2, "Jane Smith", "Designer"));
  collection.addEmployee(new Employee(3, "Alice Johnson", "Manager"));

  const iterator = collection.createIterator();

  console.log("Employee List:");
  while (iterator.hasNext()) {
    const employee = iterator.next();
    if (employee) {
      console.log(`${employee.id}: ${employee.name} - ${employee.position}`);
    }
  }
};

main();