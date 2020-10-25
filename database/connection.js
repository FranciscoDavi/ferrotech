var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '12345',
      database :  'ferro_tech'
    }
  });

module.exports = knex;