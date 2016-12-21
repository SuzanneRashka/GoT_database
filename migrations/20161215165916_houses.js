'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('houses', (table) => {
        table.increments();
        table.string('name')
            .notNullable()
            .defaultTo('');
        table.string('location')
            .notNullable()
            .defaultTo('');
        table.sting('words')
            .notNullable()
            .defaultTo('');
        table.text('sigil_description')
            .notNullable()
            .defaultTo('');
    });
};

exports.down = knex =>
    knex.schema.dropTable('houses');

    /*
    ┌────────────────────────────────────────────────────────────────┐
    │                             houses                             │
    ├────────────────┬───────────────────────┬───────────────────────┤
    │id              │serial                 │primary key            |
    │name            │varchar(255)           │not null default ''    │
    │location        │varchar(255)           │not null default ''    │
    │sigil descript  │varchar(255)           │not null default ''    │
    └────────────────┴───────────────────────┴───────────────────────┘
    */
