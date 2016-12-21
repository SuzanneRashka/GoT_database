'use strict'

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('houses').del()
        .then(() => knex.raw("ALTER SEQUENCE houses_id_seq RESTART WITH 1"))
        .then(() => knex('houses').insert([{
            // Inserts seed entries
            // id: 1
            name: 'Stark',
            location: 'Winterfell',
            words: 'Winter is Coming',
            sigil_description: "A grey direwolf on a white field."
        }, {
            name: 'Lannister',
            location: 'Casterly Rock'
            words: 'Hear Me Roar!',
            sigil_description: "A golden lion rampant on a crimson field."
        }, {
            name: 'Taragaryen',
            location: 'Bay of Dragons',
            words: 'Fire and Blood',
            sigil_description: "A red three-headed dragon."
        }, {
            name: 'Tyrell',
            location: 'Highgarden',
            words: 'Growing Stong',
            sigil_description: "A golden rose on a green field."
        }, {
            name: 'Greyjoy',
            location: 'Iron Islands',
            words: 'We Do Not Sow',
            sigil_description: "A golden kraken on a black field."
        }, {
            name: 'Tully',
            location: 'The Riverlands',
            words: 'Family, Duty, Honor',
            sigil_description: "A silver trout leaping on a red and blue background."
        }, {
            name: 'Baratheon',
            location: 'The Stormlands',
            words: 'Ours is the Fury',
            sigil_description: "A crowned black stag rampant on a gold field."
        }, {
            name: 'Arryn',
            location: 'The Eyrie',
            words: 'As High as Honor',
            sigil_description: "A white falcon volant and crescent moon on a blue field."
        }, {
            name: 'Martell',
            location: 'Dorne',
            words: 'Unbowed, Unbent, Unbroken',
            sigil_description: "A red sun pierced by a gold spear, on an orange field."
        }])
    );
};

// id
// name
// location
// sigil description
