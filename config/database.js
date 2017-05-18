module.exports = {
  user: 'postgres', //env var: PGUSER
  database: 'messagesDB', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  min: 1,
  idleTimeoutMillis: 10000, // how long a client is allowed to remain idle before being closed
};
