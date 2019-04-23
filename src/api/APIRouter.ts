import express from 'express';
import CarsRouter from './cars/CarsRouter';

let APIRouter = express.Router({mergeParams: true});

/**
 * @swagger
 * /status:
 *   get:
 *     description: Returns if the api is up or not
 *     responses:
 *       200:
 *         description: Boolean indicating if api is up or not
 */
APIRouter.get('/status', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({'up': true})
});

APIRouter.use('/cars', CarsRouter);

export default APIRouter;