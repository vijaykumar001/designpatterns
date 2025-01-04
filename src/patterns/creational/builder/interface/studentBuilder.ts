import { Student } from '../implementation/student';

export interface StudentBuilder {
    setName(name: string): this;
    setAge(age: number): this;
    setGrade(grade: string): this;
    setSubjects(subjects: string[]): this;
    build(): Student;
}