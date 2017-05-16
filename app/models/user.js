var db = require("./database.js");

var User = {
  saveUser : function (user, callback) {
      var query = 'select * from "user" where email = $1;';
      var param = [user.email];
      db.query(query, param, function(err, res) {
          if(err) {
            callback("0", "Error is saveUser"); // that bai
          }
          var number = res.rows.length;
          if(number !== 0) {
            callback("2", "Email is used !");
          } else {
            var query1 = 'INSERT INTO "user"(email, password, fullname, phone) VALUES ($1, $2, $3, $4);';
            var param1 = [user.email, user.password, user.fullname, user.phone];
            db.query(query1, param1, function(err, res1) {
              if(err) {
                callback("0", "Error is saveUser"); // that bai
              }

              db.query(query, param, function (err, res2) {
                if(err) {
                  callback("0", "Error is saveUser"); // that bai
                }
                var query2 = 'INSERT INTO public.danhsachfriend(macode) VALUES ($1);';
                var param2 = [res2.rows[0].id];
                db.query(query2, param, function (err, res3) {
                  if(err) {
                    callback("0", "Error is saveUser"); // that bai
                  }
                  callback("1", "Register is Success!"); // thanh con
                });
              });
            });
          }
      });
  },
  checkUser : function (email, password, callback) {
      var query = 'Select * from "user" where email = $1;';
      var param = [email];
      db.query(query, param, function (err, resulf) {
          var row = resulf.rows.length;
          if(row === 0) {
            callback("0", "Email not found !", null);
          }else {
            var passwordDB = resulf.rows[0].password;
            if(passwordDB !== password) {
              callback("0", "Password Incorrect !", null);
            }else {
              callback("1", "Login is Successed !", resulf.rows[0]);
            }
          }
      });
  }
}
module.exports = User;
