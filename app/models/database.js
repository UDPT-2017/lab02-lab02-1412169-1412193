var pg = require("pg");
// config database

var config = require("../../config/database.js");

var pool = new pg.Pool(config);

module.exports = pool;
