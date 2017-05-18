var db = require("../models/newmessage.js");
var markdown = require( "markdown" ).markdown;
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
      req.body.fnoidung = markdown.toHTML(req.body.fnoidung);
      db.insertnewMessage(req.session.user, req.body, function (message) {
          res.redirect("/messages");
      });
    }
}

module.exports = newmessageController
