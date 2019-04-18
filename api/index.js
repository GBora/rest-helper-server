const express = require('express');

let router = express.Router();

router.get('/status', (req, res) => {
    res.send('API is up')
})

module.exports = router;