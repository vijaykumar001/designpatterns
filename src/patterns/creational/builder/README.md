# Builder Pattern

This project demonstrates the Builder Design Pattern in TypeScript by constructing a `Student` object with various attributes.

## Directory Structure
- `src/patterns/creational/builder/`: Contains the implementation of the Builder pattern.
- `tests/creational/builder/`: Contains the test cases for the builder implementation.

## Usage
1. Run the `index.ts` file to see the constructed student details.
2. The `StudentBuilderImpl` allows for flexible construction of `Student` objects.

## Example 
```ts
// src/patterns/creational/builder/index.ts
import { StudentBuilderImpl } from './implementation/studentBuilderImpl';
import { Grade } from './enum/grade';

function clientCode() {
    const studentBuilder = new StudentBuilderImpl();
    const student = studentBuilder
        .setName('John Doe')
        .setAge(16)
        .setGrade(Grade.A)
        .setSubjects(['Math', 'Science', 'History'])
        .build();

    console.log(student.getDetails());
}

// Example usage
clientCode();
```
### 7. studentBuilder.test.ts
```ts
// tests/creational/builder/studentBuilder.test.ts
import { StudentBuilderImpl } from '../../src/patterns/creational/builder/implementation/studentBuilderImpl';
import { Grade } from '../../src/patterns/creational/builder/enum/grade';
import { Student } from '../../src/patterns/creational/builder/student';
describe('StudentBuilder', () => {
it('should create a Student with correct details', () => {
const studentBuilder = new StudentBuilderImpl();
const student: Student = studentBuilder
.setName('Jane Doe')
.setAge(15)
.setGrade(Grade.B)
.setSubjects(['English', 'Math'])
.build();
expect(student.getDetails()).toBe('Name: Jane Doe, Age: 15, Grade: B, Subjects: English, Math');
});
});
```

### Summary
This implementation demonstrates the Builder Design Pattern by allowing the construction of a `Student` object with various attributes in a flexible manner. The code adheres to SOLID principles, ensuring maintainability and scalability. The README file provides clear instructions on how to use the builder, and the test cases ensure that the builder behaves as expected.