const config = require('../../config');

const DBConnection = require('knex')({
    client: 'mysql',
    connection: config.mysql
  });

module.exports = DBConnection;