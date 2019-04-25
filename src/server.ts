// External depencies
import express from 'express';
import dotenv from 'dotenv';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// Internal depencies
import APIRouter from './api/APIRouter';

let app = express();
dotenv.config();

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

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// End of documentation

app.use('/api', APIRouter);

app.listen(process.env.PORT, () => {
    console.log(`App is online at http://localhost:${process.env.PORT}/`);
})

