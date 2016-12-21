'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('first_name').notNullable().defaultTo('');
        table.string('last_name').notNullable().defaultTo('');
        table.string('email').notNullable().unique();
        table.specificType('hashed_password', 'char(60)').notNullable();
        table.string('favorites')references('houses.id').notNullable().defaultTo('');
        table.timestamps(true, true);

    });
};

exports.down = (knex) =>
    // return knex.schema.dropTable('users');
    knex.raw('DROP TABLE users CASCADE');


/*
┌──────────────────────────────────────────────────────────────────┐
│                              users                               │
├────────────────┬─────────────────────────┬───────────────────────┤
│id              │serial                   │primary key            │
│first_name      │varchar(255)             │not null default ''    │
│last_name       │varchar(255)             │not null default ''    │
│email           │varchar(255)             │not null unique        │
|hashed_password |char(60)                 │not null               |
|favorites
|(houses.id)     │varchar(255)             |foriegn key            |
│created_at      │timestamp with time zone │not null default now() │
│updated_at      │timestamp with time zone │not null default now() │
└────────────────┴─────────────────────────┴───────────────────────┘
*/
