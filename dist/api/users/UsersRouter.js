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
const UsersAPI_1 = __importDefault(require("./UsersAPI"));
const UsersRouter = express_1.default.Router({ mergeParams: true });
UsersRouter.route("/username-available")
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.body.username) {
        res.status(400).send("Parameter username required!");
    }
    try {
        const result = yield UsersAPI_1.default.checkIfUsernameAvailable(req.body.username);
        res.send(result);
    }
    catch (_a) {
        res.sendStatus(500);
    }
}));
UsersRouter.route("/all")
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const result = yield UsersAPI_1.default.getAllUsers();
        res.send(result);
    }
    catch (_b) {
        res.sendStatus(500);
    }
}));
exports.default = UsersRouter;
//# sourceMappingURL=UsersRouter.js.map