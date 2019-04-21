"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CarsAPI_1 = __importDefault(require("./CarsAPI"));
let CarsRouter = express_1.default.Router({ mergeParams: true });
CarsRouter.route('/all')
    .get((req, res) => {
    res.send(CarsAPI_1.default.getAll());
});
exports.default = CarsRouter;
//# sourceMappingURL=CarsRouter.js.map