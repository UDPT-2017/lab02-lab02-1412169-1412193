var db = require("./database.js");
var newMessageController = {
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
  insertnewMessage : function (user, objects, callback) {
      var day = new Date();
      var query = 'INSERT INTO public.messages(chude, noidung, nguoigui, nguoinhan, thoigiangui) VALUES ($1, $2, $3, $4, $5);';
      var param = [objects.fchude, objects.fnoidung, user.id, objects.EmailID, day];
      db.query(query, param, function (err, resulf) {
        if(err) {
            return console.error('Error: ', err);
        }
        callback("Sent is success !!");
      });
  }
}

module.exports = newMessageController;
