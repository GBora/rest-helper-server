import express from 'express';
import CarsAPI from './CarsAPI';

let CarsRouter = express.Router({mergeParams: true});

CarsRouter.route('/all')
          .get(async (req, res) => {
            try {
              let cars = await CarsAPI.getAll();
              res.send()
            } catch {
              res.sendStatus(500);
            }
          })

export default CarsRouter;