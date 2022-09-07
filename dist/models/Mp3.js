"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Device_1 = __importDefault(require("./Device"));
class Mp3 extends Device_1.default {
    constructor() {
        super(...arguments);
        this.volumen = 0;
    }
    play(song) {
        console.log(`[MP3] 🎶 ${song}`);
    }
}
exports.default = Mp3;
