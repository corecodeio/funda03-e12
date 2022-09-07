"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Iphone_1 = __importDefault(require("./Iphone"));
const Kindle_1 = __importDefault(require("./Kindle"));
const Mp3_1 = __importDefault(require("./Mp3"));
class Main {
    startTap(device) {
        device.tap();
    }
    startPlaylist(device) {
        device.play('One Song...');
    }
    start() {
        const iphone = new Iphone_1.default();
        const kindle = new Kindle_1.default();
        const mp3 = new Mp3_1.default();
        console.log(iphone.getSerialNumber());
    }
}
exports.default = Main;
