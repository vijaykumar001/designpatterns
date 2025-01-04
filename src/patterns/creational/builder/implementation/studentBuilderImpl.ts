import { StudentBuilder } from '../interface/studentBuilder';
import { Student } from './student';

export class StudentBuilderImpl implements StudentBuilder {
    private name: string = '';
    private age: number = 0;
    private grade: string = '';
    private subjects: string[] = [];

    setName(name: string): this {
        this.name = name;
        return this;
    }

    setAge(age: number): this {
        this.age = age;
        return this;
    }

    setGrade(grade: string): this {
        this.grade = grade;
        return this;
    }

    setSubjects(subjects: string[]): this {
        this.subjects = subjects;
        return this;
    }

    build(): Student {
        return new Student(this.name, this.age, this.grade, this.subjects);
    }
} 