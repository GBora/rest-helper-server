"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CarsRouter_1 = __importDefault(require("./cars/CarsRouter"));
const UsersRouter_1 = __importDefault(require("./users/UsersRouter"));
const TodosRouter_1 = __importDefault(require("./todos/TodosRouter"));
const MessagesRouter_1 = __importDefault(require("./messages/MessagesRouter"));
const APIRouter = express_1.default.Router({ mergeParams: true });
/**
 * @swagger
 * /status:
 *   get:
 *     description: Returns if the api is up or not
 *     responses:
 *       200:
 *         content:
 *           description: Boolean indicating if api is up or not
 */
APIRouter.get("/status", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send({ "is_up": true });
});
APIRouter.use("/cars", CarsRouter_1.default);
APIRouter.use("/users", UsersRouter_1.default);
APIRouter.use("/todos", TodosRouter_1.default);
APIRouter.use("/messages", MessagesRouter_1.default);
exports.default = APIRouter;
//# sourceMappingURL=APIRouter.js.map