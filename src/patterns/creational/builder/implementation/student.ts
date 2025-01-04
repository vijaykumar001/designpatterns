export class Student {
    private name: string;
    private age: number;
    private grade: string;
    private subjects: string[];

    constructor(name: string, age: number, grade: string, subjects: string[]) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.subjects = subjects;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Subjects: ${this.subjects.join(', ')}`;
    }
} 