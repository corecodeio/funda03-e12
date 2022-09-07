"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.id = (0, uuid_1.v4)();
    }
    getFullName() {
        return `${this.name} ${this.lastname}`;
    }
    getId() {
        return this.id;
    }
}
exports.default = Person;
