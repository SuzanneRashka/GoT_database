'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('characters', (table) => {
        table.increments();
        table.integer('houses_id')
            .references('houses.id')
            .notNullable()
            .onDelete('CASCADE');
        table.string('last_name')
            .notNullable()
            .defaultTo('');
        table.string('first_name')
            .notNullable()
            .defaultTo('');
        table.integer('age')
            .notNullable()
            .defaultTo(12);
    });
};

exports.down = knex =>
    knex.schema.dropTable('characters');


    /*
    ┌──────────────────────────────────────────────────────────────┐
    │                            houses                            │
    ├────────────────┬─────────────────────┬───────────────────────┤
    │id              │serial               │primary key            │
    |houses.id       │references           |foriegn key            |
    │last name       │varchar(255)         │not null default ''    │
    │first name      │varchar(255)         │not null default ''    │
    │age             │varchar(255)         │not null default ''    │
    └────────────────┴─────────────────────┴───────────────────────┘
    */
