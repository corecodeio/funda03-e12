"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Device_1 = __importDefault(require("./Device"));
class Iphone extends Device_1.default {
    constructor() {
        super(...arguments);
        this.position = [0, 0];
        this.volumen = 0;
    }
    tap() {
        const [x, y] = this.position;
        console.log(`Tap on: x:${x}, y:${y}`);
    }
    play(song) {
        const message = `[IPHONE] 🎶 ${song}`;
        console.log(message);
    }
}
exports.default = Iphone;
