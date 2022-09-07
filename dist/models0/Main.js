"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
const Teacher_1 = __importDefault(require("./Teacher"));
class Main {
    start() {
        const t1 = new Teacher_1.default('Lorem', 'Ipsum', 30, 'Math');
        console.log(t1.getId());
        const s1 = new Student_1.default('Random', 'Test', 20);
        console.log(s1.getId());
    }
}
exports.default = Main;
