const express = require('express');
const CarsAPI = require('./CarsAPI');

let router = express.Router({mergeParams: true});

router.route('/all')
      .get((req, res) => {
        res.send(CarsAPI.getAll())
      })

module.exports = router;