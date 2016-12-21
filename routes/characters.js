'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/characters', (req, res) => {
    knex('characters')
        .then((characters) => {
            res.send(characters)
        });
});

router.get('/characters/:id', (req, res) => {
    knex('characters')
        .where('id', req.params.id)
        .first()
        .then((character) => {
            res.send(character);
        });
});

router.post('/characters', (req, res) => {
    knex('characters')
        .insert(req.body)
        .returning(['house_id', 'last_name', 'first_name', 'age'])
        .then((characters) => {
            res.send(charactes[0]);
        });
});

router.patch('/characters/:id', (req, res) => {
    knex('characters')
        .where('id', req.params.id)
        .update(req.params)
        .returning(['house_id', 'last_name', 'first_name', 'age'])
        .then((characters) => {
            res.send(characters[0]);
    });
});

router.delete('/characters/:id', (req, res) => {
    knex('characters')
        .where('id', req.params.id)
        .first()
        .then((character) => {
            knex('characters')
                .where('id', req.params.id)
                .del()
                .then(() => {
                    delete house.id;
                    res.send(character);
                });
        });
});

module.exports = router;
// house.id
// last name
// first name
// age
