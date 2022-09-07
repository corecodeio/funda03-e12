import { v4 as uuidv4 } from 'uuid';
export default abstract class Device {
  private serial_number: string;

  abstract color: string | undefined;

  constructor() {
    this.serial_number = uuidv4();
  }

  abstract getBrand(): string;

  getSerialNumber(): string {
    return this.serial_number;
  }
}
