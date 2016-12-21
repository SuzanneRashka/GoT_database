'use strict'

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('characters').del()
        .then(() => knex.raw("ALTER SEQUENCE characters_id_seq RESTART WITH 1"))
        .then(() => knex('characters').insert([
        {
            //id: increments
            houses_id: 2,
            last_name: 'Lannister',
            first_name: 'Jamie',
            age: 43
        }, {
            houses_id: 2,
            last_name: 'Lannister',
            first_name: 'Cersei',
            age: 43
        }, {
            houses_id: 1,
            last_name: 'Stark',
            first_name: 'Sansa',
            age: 19
        }, {
            houses_id: 1,
            last_name: 'Stark',
            first_name: 'Arya',
            age: 17
        }, {
            houses_id: 1,
            last_name: 'Snow',
            first_name: 'Jon',
            age: 21
        }, {
            houses_id: 3,
            last_name: 'Taragaryen',
            first_name: 'Daeneys',
            age: 22
        }, {
            houses_id: 5,
            last_name: 'Greyjoy',
            first_name: 'Theon',
            age: 22
        }, {
            houses_id: 5,
            last_name: 'Greyjoy',
            first_name: 'Yara',
            age: 23
        }])
    );
};


// house.id
// last name
// first name
// age
