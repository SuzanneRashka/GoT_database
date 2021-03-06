'use strict'

exports.seed = function(knex)  {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(() => knex('users').insert({
            first_name: 'Suzanne',
            last_name: 'Rashka',
            email: 'suzanne.rashka@gmail.com',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC')
        }));
};
