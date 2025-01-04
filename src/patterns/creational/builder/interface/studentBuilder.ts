import { Student } from '../implementation/student';
/*
 * Interface for the StudentBuilder class.
 * 
 * @interface
 * @exports {StudentBuilder} - The StudentBuilder interface
 */
export interface StudentBuilder {
    setName(name: string): this;
    setAge(age: number): this;
    setGrade(grade: string): this;
    setSubjects(subjects: string[]): this;
    build(): Student;
}