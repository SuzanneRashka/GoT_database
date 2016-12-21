'use strict'

const express = require('express');
const app = express();
// const knex = require('./knex');
// const router = express.Router();

const port = process.env.PORT || 8000;
// const fs = require('fs');

const morgan = require('morgan');
const bodyParser = require('body-parser');

// const houses = require('./routes/houses');
// const characters = require('./routes/characters');

app.disable('x-powered-by');

const characters = require('./routes/characters');
const houses = require('./routes/houses');
const users = require('./routes/users');


app.use(bodyParser.json());

app.use(houses);
app.use(characters);
app.use(users);

app.use((_req, res) => {
    res.sendStatus(404);
});
//
// router.get('/houses', (req, res) => {
//     knex('houses')
//         .then((house) => {
//             res.send(house);
//         });
// });

app.listen(port, function(){
    console.log('Listening on port', port);
});

module.exports = app;
