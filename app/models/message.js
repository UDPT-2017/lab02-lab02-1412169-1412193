var db = require("./database.js");
var messagesPage = {
  getMessageRecive : function (user, callback) {
      // lay cac tin nhan da gui cho thang nay
      var sql = 'SELECT messageid, chude, noidung, email, to_char(thoigiangui, \'DD-MM-YYYY\') thoigiangui ,to_char(thoigianxem, \'DD-MM-YYYY\') thoigianxem FROM messages a, "user" b where a.nguoigui = b.id and a.nguoinhan = $1;';
      var param = [user.id];
      db.query(sql, param, function (err, resulf) {
        if(err) {
            return console.error('Error: ', err);
        }
        callback(resulf.rows);
      });
  },
  getMessageSent : function (user, callback) {
    var sql = 'SELECT messageid, chude, noidung, email, to_char(thoigiangui, \'DD-MM-YYYY\') thoigiangui ,to_char(thoigianxem, \'DD-MM-YYYY\') thoigianxem FROM messages a, "user" b where a.nguoinhan = b.id and a.nguoigui = $1;';
    var param = [user.id];
    db.query(sql, param, function (err, resulf) {
      if(err) {
          return console.error('Error: ', err);
      }
      callback(resulf.rows);
    });
  },
  CheckingMessage : function (objects, callback) {
    var sql = 'UPDATE messages set thoigianxem = $1 where messageid = $2';
    var param = [objects.Time, objects.id];
    db.query(sql, param, function (err, resulf) {
      if(err) {
          return console.error('Error: ', err);
      }
      callback("Thanh Cong");
    });
  }
};
module.exports = messagesPage;
