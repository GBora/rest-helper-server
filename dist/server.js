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
// External depencies
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const body_parser_1 = __importDefault(require("body-parser"));
// Internal depencies
const APIRouter_1 = __importDefault(require("./api/APIRouter"));
let app = express_1.default();
dotenv_1.default.config();
// Documentation
const swaggerDefinition = {
    // openapi: "3.0.0",
    info: {
        title: 'REST-HELPER',
        version: '1.0.0',
        description: 'A API to help test out FE frameworks',
    },
    host: `localhost:${process.env.PORT}`,
    basePath: '/api',
};
const options = {
    swaggerDefinition,
    apis: ['./src/**/*.ts'],
};
const swaggerSpec = swagger_jsdoc_1.default(options);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// End of documentation
app.use(body_parser_1.default.json());
let customReplyMiddleware = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let code = Number.parseInt(req.headers['rest-response-code'], 10);
    let delay = Number.parseInt(req.headers['rest-delay'], 10);
    if (delay) {
        yield new Promise(resolve => setTimeout(resolve, delay));
    }
    if (code) {
        res.sendStatus(code);
    }
    next();
});
app.use(customReplyMiddleware);
app.use('/api', APIRouter_1.default);
app.listen(process.env.PORT, () => {
    console.log(`App is online at http://localhost:${process.env.PORT}/ \n Swagger is available at http://localhost:${process.env.PORT}/api-docs`);
});
//# sourceMappingURL=server.js.map