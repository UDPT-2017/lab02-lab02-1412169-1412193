var db = require("../models/newmessage.js");

var newmessageController = {
    newmessageDefault: function (req, res) {
      db.getFriend(req.session.user, function (DanhSachBanBe) {
        res.render("newmessages", {
            title: "New Messages",
            layout: "application",
            user: req.session.user,
            list: DanhSachBanBe
        });
      });
    },
    processnewmessage : function (req, res) {
      // chua xu ly luu thong tin
      db.insertnewMessage(req.session.user, req.body, function (message) {
          res.redirect("/messages");
      });
    }
}

module.exports = newmessageController
