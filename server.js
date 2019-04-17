const express = require('express');

let app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('REST-Helper-Service is online!');
});

app.listen(process.env.PORT, () => {
    console.log(`App is online at http://localhost:${process.env.PORT}/`);
})