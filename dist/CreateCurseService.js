"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCurseService {
    execute({ duration = 8, educator, name }) {
        console.log(duration, educator, name);
    }
}
exports.default = new CreateCurseService();
