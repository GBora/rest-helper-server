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
const TodosAPI_1 = __importDefault(require("./TodosAPI"));
let TodosRouter = express_1.default.Router({ mergeParams: true });
TodosRouter.route('/all')
    /**
     * @swagger
     * /todos/all:
     *  get:
     *    description: Return all todos
     *    responses:
     *      200:
     *        description: An array of all todo
     *      500:
     *        description: Internal server error
     */
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let todos = yield TodosAPI_1.default.getAll();
        res.status(200).send(todos);
    }
    catch (_a) {
        res.status(500).send('Could not fetch all todos.');
    }
}));
TodosRouter.route('/item/:id')
    /**
     * @swagger
     * /todos/item/:id:
     *  get:
     *    description: Return all todos
     *    responses:
     *      200:
     *        description: An array of all todo
     *      500:
     *        description: Internal server error
     */
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).send('Invalid request an id needs to be present');
    }
    if (!Number.parseInt(req.params.id, 10)) {
        res.status(400).send('Invalid request an id needs to be an integer');
    }
    try {
        let todo = yield TodosAPI_1.default.getById(req.params.id);
        res.status(200).send(todo);
    }
    catch (_b) {
        res.status(500).send('Could not fetch todo.');
    }
}))
    .delete((req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).send('Invalid request an id needs to be present');
    }
    if (!Number.parseInt(req.params.id, 10)) {
        res.status(400).send('Invalid request an id needs to be an integer');
    }
    try {
        let result = yield TodosAPI_1.default.deleteById(req.params.id);
        res.status(200).send('Todo deleted');
    }
    catch (_c) {
        res.status(500).send('Could not delete');
    }
}));
TodosRouter.route('/new')
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.body.text && req.body.text.length > 1) {
        res.status(400).send('Property "text" required for end point ');
    }
    try {
        yield TodosAPI_1.default.create(req.body.text);
        res.status(200).send('Todo created');
    }
    catch (_d) {
        res.status(500).send('Could not create');
    }
}));
exports.default = TodosRouter;
//# sourceMappingURL=TodosRouter.js.map