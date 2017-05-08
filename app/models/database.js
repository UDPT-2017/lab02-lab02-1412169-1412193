var pg = require("pg");
// config database

var config = {
  user: 'foo', //env var: PGUSER
  database: 'my_db', //env var: PGDATABASE
  password: 'secret', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  min: 1,
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

module.exports = {

}
