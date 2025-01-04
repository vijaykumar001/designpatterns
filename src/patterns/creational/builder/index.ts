import { StudentBuilderImpl } from './implementation/studentBuilderImpl';
import { Grade } from './enum/grade';
/**
 * Main entry point for the builder pattern implementation.
 * 
 * @module
 * @exports {StudentBuilderImpl} - The StudentBuilderImpl class
 * @exports {Grade} - The Grade enum
 */
function clientCode() {
    const studentBuilder = new StudentBuilderImpl();
    const student = studentBuilder
        .setName('John Doe')
        .setAge(16)
        .setGrade(Grade.ONE.toString())
        .setSubjects(['Math', 'Science', 'History'])
        .build();

    console.log(student.getDetails());
}

// Example usage
clientCode();