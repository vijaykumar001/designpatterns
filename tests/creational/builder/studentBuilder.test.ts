import { StudentBuilderImpl } from '../../../src/patterns/creational/builder/implementation/studentBuilderImpl';
import { Grade } from '../../../src/patterns/creational/builder/enum/grade';
import { Student } from '../../../src/patterns/creational/builder/implementation/student';
/**
 * Test cases for the builder implementation.
 */
describe('StudentBuilder', () => {
    it('should create a Student with correct details', () => {
        const studentBuilder = new StudentBuilderImpl();
        const student: Student = studentBuilder
            .setName('Jane Doe')
            .setAge(15)
            .setGrade(Grade.TWO.toString())
            .setSubjects(['English', 'Math'])
            .build();
        expect(student.getDetails()).toBe('Name: Jane Doe, Age: 15, Grade: 2, Subjects: English, Math');
    });
});