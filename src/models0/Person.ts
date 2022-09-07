import { v4 as uuidv4 } from 'uuid';

export default class Person {
  public name: string;
  public lastname: string;
  public age: number;
  private id: string;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.id = uuidv4();
  }

  getFullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  getId(): string {
    return this.id;
  }
}
