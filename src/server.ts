// External depencies
import express from 'express';
import dotenv from 'dotenv';
// Internal depencies
import APIRouter from './api/APIRouter';

let app = express();
dotenv.config();

app.use('/api', APIRouter);

app.listen(process.env.PORT, () => {
    console.log(`App is online at http://localhost:${process.env.PORT}/`);
})