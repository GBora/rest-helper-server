"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CarsRouter_1 = __importDefault(require("./cars/CarsRouter"));
let APIRouter = express_1.default.Router({ mergeParams: true });
/**
 * @swagger
 * /status:
 *   get:
 *     description: Returns if the api is up or not
 *     responses:
 *       200:
 *         description: Boolean indicating if api is up or not
 */
APIRouter.get('/status', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({ 'is_up': true });
});
APIRouter.use('/cars', CarsRouter_1.default);
exports.default = APIRouter;
//# sourceMappingURL=APIRouter.js.map