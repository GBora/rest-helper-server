import express from 'express';
import CarsAPI from './CarsAPI';

let CarsRouter = express.Router({mergeParams: true});

CarsRouter.route('/all')
          .get((req, res) => {
            res.send(CarsAPI.getAll())
          })

export default CarsRouter;