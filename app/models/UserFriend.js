var db = require("./database.js");

userPage = {
    // lay ra thong tin cua nhung thang chua la ban
    getUser : function (user, callback) {
      var query = 'select c.id, c.fullname, c.email, c.phone from "user" c where c.id != $1 and not exists( select * from danhsachfriend a , chitietdanhsach b where a.macode = $2 and b.mads = a.mads and c.id = b.macode)';
      var param = [user.id, user.id];
      db.query(query, param, function (err, resulf) {
        if(err) {
            return console.error('Error: ', err);
        }
        callback(resulf.rows);
      });
    },
    // lay ra thong tin cac dua da la ban cua minh
    getFriend : function (user, callback) {
      var query = 'select c.id, c.fullname, c.email, c.phone from danhsachfriend a , chitietdanhsach b , "user" c where a.macode = $1 and b.mads = a.mads and c.id = b.macode';
      var param = [user.id];
      db.query(query, param, function (err, resulf) {
        if(err) {
            return console.error('Error: ', err);
        }
        callback(resulf.rows);
      });
    },
    // user : thang muon them
    // userPre : thang duoc them
    AddFriend : function (user, userPre, callback) {
      var idPre = userPre.id;
      var id = user.id;

      var query = 'select mads from danhsachfriend where macode = $1'; // lay ma danh sach
      var param = [idPre];
      db.query(query, param, function (err, resulf) {
        if(err) {
            return console.error('Error: ', err);
        }
        var mads = resulf.rows[0].mads;
        console.log(mads);
        var query1 = 'INSERT INTO public.chitietdanhsach(mads, macode) VALUES ($1, $2);'; // lay ma danh sach
        var param1 = [mads, id];
        db.query(query1, param1, function (err, resulf1) {
          if(err) {
              return console.error('Error: ', err);
          }
          callback("Insert Success !");
        });
      });
    }
}

module.exports = userPage;
