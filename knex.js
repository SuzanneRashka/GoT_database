// 'use strict';
//
// const env = 'development';
// const config = require('./knexfile.js')[env];
// const knex = require('knex')(config);
//
// // const sql = knex('houses').toString();
//
// module.export = knex;

'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
