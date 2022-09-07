import Student from './Student';
import Teacher from './Teacher';
export default class Main {
  start(): void {
    const t1 = new Teacher('Lorem', 'Ipsum', 30, 'Math'); // T-<ID_PERSON>
    console.log(t1.getId());
    const s1 = new Student('Random', 'Test', 20); // S-<ID_PERSON>
    console.log(s1.getId());
  }
}
