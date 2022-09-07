import Person from './Person';
export default class Teacher extends Person {
  mainClass: string;
  private salary: number;

  constructor(name: string, lastname: string, age: number, mainClass: string) {
    super(name, lastname, age);
    this.mainClass = mainClass;
    this.salary = 10_000;
  }

  setSalary(newSalary: number): void {
    if (newSalary <= 100_000) {
      this.salary = newSalary;
    }
  }

  showSalary(): void {
    console.log(this.salary);
  }

  getId(): string {
    return `T-${super.getId()}`;
  }
}
