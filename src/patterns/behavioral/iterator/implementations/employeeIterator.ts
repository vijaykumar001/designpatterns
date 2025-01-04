import { Iterator } from "../interfaces/iteratorInterface";
import { Employee } from "../models/employee";

/**
 * EmployeeIterator
 * An iterator for traversing the EmployeeCollection.
 */
export class EmployeeIterator implements Iterator<Employee> {
  private index = 0;

  constructor(private employees: Employee[]) {}

  hasNext(): boolean {
    return this.index < this.employees.length;
  }

  next(): Employee | null {
    if (this.hasNext()) {
      return this.employees[this.index++];
    }
    return null;
  }
}