"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External depencies
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// Internal depencies
const APIRouter_1 = __importDefault(require("./api/APIRouter"));
let app = express_1.default();
dotenv_1.default.config();
// Documentation
const swaggerDefinition = {
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
app.use('/api', APIRouter_1.default);
app.listen(process.env.PORT, () => {
    console.log(`App is online at http://localhost:${process.env.PORT}/ \n Swagger is available at http://localhost:${process.env.PORT}/api-docs`);
});
//# sourceMappingURL=server.js.map