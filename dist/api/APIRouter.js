"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CarsRouter_1 = __importDefault(require("./cars/CarsRouter"));
let APIRouter = express_1.default.Router({ mergeParams: true });
APIRouter.get('/status', (req, res) => {
    res.send('API is up');
});
APIRouter.use('/cars', CarsRouter_1.default);
exports.default = APIRouter;
//# sourceMappingURL=APIRouter.js.map