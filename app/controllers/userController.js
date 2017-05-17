var db = require("../models/UserFriend.js");
var user = {
    DefaultPage: function (req, res) {
        var user = {
          id: req.session.user.id,
          email: req.session.user.email,
          fullname: req.session.user.phone
        };
        db.getUser(req.session.user, function (listUser) {
            db.getFriend(req.session.user, function (listFriend) {
                res.render("user", {
                    title: "User Page",
                    layout: "application",
                    user: req.session.user,
                    sv: listUser,
                    friends: listFriend,
                    list : listFriend
                });
            });
        });
    },
    refreshUser: function (req, res) {
      db.getUser(req.session.user, function (listUser) {
        res.send({
            sinhvien: listUser
        });
      })
    },
    refreshListFriend: function (req, res) {
      db.getFriend(req.session.user, function (listFriend) {
        res.send({
            listfriend: listFriend
        });
      });
    },
    PushUser: function (req, res) {
      db.AddFriend(req.body.friend,req.session.user,function (message) {
          // don't

          res.send("Add friend is success !"); // send thong diep
      });
    }
};

module.exports = user;
