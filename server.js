// External depencies
const express = require('express');
// Internal depencies
let api = require('./api');

let app = express();
require('dotenv').config();

app.use('/api', api);

app.listen(process.env.PORT, () => {
    console.log(`App is online at http://localhost:${process.env.PORT}/`);
})