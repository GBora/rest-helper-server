const express = require('express');

let app = express();

let port = 9000;

app.get('/', (req, res) => {
    res.send('REST-Helper-Service is online!');
});

app.listen(port, () => {
    console.log(`App is online at http://localhost:${port}/`);
})