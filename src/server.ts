// External depencies
import express from "express";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
// Internal depencies
import APIRouter from "./api/APIRouter";

const app = express();
dotenv.config();

// Documentation
const swaggerDefinition = {
    // openapi: "3.0.0",
    info: {
        title: "REST-HELPER",
        version: "1.0.1",
        description: "A API to help test out FE frameworks",
    },
    host: `localhost:${process.env.PORT}`,
    basePath: "/api",
};

const options = {
    swaggerDefinition,
    apis: ["./src/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// End of documentation

app.use(bodyParser.json());

const customReplyMiddleware = async (req: any, res: any, next: any) => {
    const code = Number.parseInt(req.headers["rest-response-code"], 10);
    const delay = Number.parseInt(req.headers["rest-delay"], 10);

    if (delay) {
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    if (code) {
        res.sendStatus(code);
    }

    next();
};

app.use(customReplyMiddleware);

app.use("/api", APIRouter);

app.listen(process.env.PORT, () => {
    console.log(`App is online at http://localhost:${process.env.PORT}/ \n Swagger is available at http://localhost:${process.env.PORT}/api-docs`);
});

