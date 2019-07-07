import express from "express";
import CarsAPI from "./CarsAPI";

const CarsRouter = express.Router({mergeParams: true});

CarsRouter.route("/all")
          /**
           * @swagger
           * /cars/all:
           *   get:
           *     description: Returns all of the cars.
           *     responses:
           *       200:
           *         description: An array of cars.
           *         content:
            *         application/json:
              *          schema:
              *            type: array
              *            items: objects
           *       500:
           *         description: Unexpected error
           */
          .get(async (req, res) => {
            try {
              const cars = await CarsAPI.getAll();
              res.send(cars);
            } catch {
              res.sendStatus(500);
            }
          });

CarsRouter.route("/:id")
          /**
          * @swagger
          * /cars/id:
          *   get:
          *     description: Returns a car by it's id
          *     produces:
          *       - application/json
          *     parameters:
          *       - name: id
          *         description: The car's id.
          *         required: true
          *         type: int
          *     responses:
          *       200:
          *         car: an car
          *       500:
          *         error: an error
          */
          .get(async (req, res) => {
            if (!req.params.id) {
              res.status(400).send("ID required");
            }

            if (!Number.parseInt(req.params.id, 10)) {
              res.status(400).send("ID needs to be number");
            }

            try {
              const car = await CarsAPI.getById(req.params.id);
              if (car) {
                res.send(car);
              } else {
                res.send(404);
              }
            } catch {
              res.sendStatus(500);
            }
          });

export default CarsRouter;