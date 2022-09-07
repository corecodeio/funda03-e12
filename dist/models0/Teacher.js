"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Teacher extends Person_1.default {
    constructor(name, lastname, age, mainClass) {
        super(name, lastname, age);
        this.mainClass = mainClass;
        this.salary = 10000;
    }
    setSalary(newSalary) {
        if (newSalary <= 100000) {
            this.salary = newSalary;
        }
    }
    showSalary() {
        console.log(this.salary);
    }
    getId() {
        return `T-${super.getId()}`;
    }
}
exports.default = Teacher;
