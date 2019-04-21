import express from 'express';
import CarsRouter from './cars/CarsRouter';

let APIRouter = express.Router({mergeParams: true});

APIRouter.get('/status', (req, res) => {
    res.send('API is up')
});

APIRouter.use('/cars', CarsRouter);

export default APIRouter;

