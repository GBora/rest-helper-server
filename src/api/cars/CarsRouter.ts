import express from 'express';
import CarsAPI from './CarsAPI';

let CarsRouter = express.Router({mergeParams: true});

CarsRouter.route('/all')
          /**
           * @swagger
           * /cars/all:
           *   get:
           *     description: Returns all of the cars
           *     responses:
           *       200:
           *         cars: array of cars
           *       500:
           *         error: an error
           */
          .get(async (req, res) => {
            try {
              let cars = await CarsAPI.getAll();
              res.send(cars);
            } catch {
              res.sendStatus(500);
            }
          })

CarsRouter.route('/:id')
          /**
           * @swagger
           * /cars/id:
           *   get:
           *     description: Returns a car by it's id
           *     responses:
           *       200:
           *         car: an car
           *       500:
           *         error: an error
           */
          .get(async (req, res) => {
            if (!req.params.id) {
              res.status(400).send('ID required')
            }

            if (!Number.parseInt(req.params.id, 10)) {
              res.status(400).send('ID needs to be number')
            }
            try {
              let car = await CarsAPI.getById(req.params.id);
              if (car) {
                res.send(car);
              } else {
                res.send(404);
              }
            } catch {
              res.sendStatus(500);
            }
          })

export default CarsRouter;