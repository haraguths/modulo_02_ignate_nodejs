"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCurso = void 0;
const createCurseService_1 = __importDefault(require("./createCurseService"));
function createCurso(request, response) {
    createCurseService_1.default.execute({ name: "Node", educator: "Yuri" });
    return response.send();
}
exports.createCurso = createCurso;
