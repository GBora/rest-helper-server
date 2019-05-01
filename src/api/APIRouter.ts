import express from 'express';
import CarsRouter from './cars/CarsRouter';
import UsersRouter from './users/UsersRouter';
import TodosRouter from './todos/TodosRouter';

let APIRouter = express.Router({mergeParams: true});

/**
 * @swagger
 * /status:
 *   get:
 *     description: Returns if the api is up or not
 *     responses:
 *       200:
 *         content:
 *           description: Boolean indicating if api is up or not
 */
APIRouter.get('/status', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({'is_up': true})
});

APIRouter.use('/cars', CarsRouter);
APIRouter.use('/users', UsersRouter);
APIRouter.use('/todos', TodosRouter);

export default APIRouter;