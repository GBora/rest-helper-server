const express = require('express');
const CarsRouter = require('./cars/CarsRouter');

let router = express.Router({mergeParams: true});

router.get('/status', (req, res) => {
    res.send('API is up')
});

router.use('/cars', CarsRouter)

module.exports = router;