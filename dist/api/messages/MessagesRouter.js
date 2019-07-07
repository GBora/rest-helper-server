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
const MessagesAPI_1 = __importDefault(require("./MessagesAPI"));
const MessagesRouter = express_1.default.Router({ mergeParams: true });
MessagesRouter.route("/conversation/:user1/:user2")
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const messages = yield MessagesAPI_1.default.getConversationBetween(req.params.user1, req.params.user2);
        if (messages) {
            res.send(messages);
        }
        else {
            res.send(404);
        }
    }
    catch (_a) {
        res.sendStatus(500);
    }
}));
exports.default = MessagesRouter;
//# sourceMappingURL=MessagesRouter.js.map