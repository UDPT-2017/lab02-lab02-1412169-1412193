var pg = require("pg");
// config database

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'messagesDB', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  min: 1,
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);
var User = {
  getUser  : function (username, password, callback) {

  },
  saveUser : function (user, callback) {
      var query = 'select * from "user" where email = $1;';
      var param = [user.email];
      pool.query(query, param, function(err, res) {
          if(err) {
            return callback("0", "Error is saveUser"); // that bai
          }
          var number = res.rows.length;
          if(number !== 0) {
            console.log(number);
            callback("2", "Email is used !");
          } else {
            var query1 = 'INSERT INTO "user"(email, password, fullname, phone) VALUES ($1, $2, $3, $4);';
            var param1 = [user.email, user.password, user.fullname, user.phone];
            pool.query(query1, param1, function(err, res1) {
              if(err) {
                callback("0", "Error is saveUser"); // that bai
              }
              callback("1", "Register is Success!"); // thanh cong
            });
          }
      });
  }
}
module.exports = User;
