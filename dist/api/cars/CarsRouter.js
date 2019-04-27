"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CarsAPI_1 = __importDefault(require("./CarsAPI"));
let CarsRouter = express_1.default.Router({ mergeParams: true });
CarsRouter.route('/all')
    /**
     * @swagger
     * /cars/all:
     *   get:
     *     description: Returns all of the cars
     *     responses:
     *       200:
     *         cars: array of cars
     *       500:
     *         error: an error
     */
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let cars = yield CarsAPI_1.default.getAll();
        console.log('cars', cars);
        res.send(cars);
    }
    catch (_a) {
        res.sendStatus(500);
    }
}));
exports.default = CarsRouter;
//# sourceMappingURL=CarsRouter.js.map