'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/houses', (req, res) => {
    knex('houses')
        .then((houses) => {
            res.send(houses);
        });
});

router.get('/houses/:id', (req, res) => {
    knex('houses')
        .where('id', req.params.id)
        .first()
        .then((house) => {
            res.send(house);
        });
});

router.post('/houses', (req, res) => {
    knex('houses')
        .insert(req.body)
        .returning(['id', 'name', 'location', 'words', 'sigil_description'])
        .then((houses) => {
            res.send(houses[0]);
        });
});

router.patch('/houses/:id', (req, res) => {
    knex('houses')
        .where('id', req.params.id)
        .update(req.params)
        .returning(['id', 'name', 'location', 'words', 'sigil_description'])
        .then((houses) => {
            res.send(houses[0]);
        });
});

router.delete('/houses/:id', (req, res) => {
    knex('houses')
        .where('id', req.params.id)
        .first()
        .then((house) => {
            knex('houses')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete house.id;
                    res.send(house);
                });
        });
});

module.exports = router;


// id
// name
// location
// sigil description
