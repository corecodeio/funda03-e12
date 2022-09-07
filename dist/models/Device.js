"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Device {
    constructor() {
        this.serial_number = (0, uuid_1.v4)();
    }
    getSerialNumber() {
        return this.serial_number;
    }
}
exports.default = Device;
