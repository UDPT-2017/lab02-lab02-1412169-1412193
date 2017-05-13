var db = require("../models/UserFriend.js");

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
      res.redirect("/messages");
    }
}

module.exports = newmessageController
