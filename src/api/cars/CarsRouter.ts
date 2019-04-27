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
              console.log('cars', cars);
              res.send(cars);
            } catch {
              res.sendStatus(500);
            }
          })

export default CarsRouter;