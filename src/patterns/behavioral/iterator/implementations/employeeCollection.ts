import { Aggregate } from "../interfaces/aggregateInterface";
import { Iterator } from "../interfaces/iteratorInterface";
import { Employee } from "../models/employee";
import { EmployeeIterator } from "./employeeIterator";

/**
 * EmployeeCollection
 * A collection of employees that implements the Aggregate interface.
 */
export class EmployeeCollection implements Aggregate<Employee> {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  createIterator(): Iterator<Employee> {
    return new EmployeeIterator(this.employees);
  }
}