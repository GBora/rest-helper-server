"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External depencies
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Internal depencies
const APIRouter_1 = __importDefault(require("./api/APIRouter"));
let app = express_1.default();
dotenv_1.default.config();
app.use('/api', APIRouter_1.default);
app.listen(process.env.PORT, () => {
    console.log(`App is online at http://localhost:${process.env.PORT}/`);
});
//# sourceMappingURL=server.js.map