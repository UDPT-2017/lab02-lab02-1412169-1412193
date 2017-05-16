var db = require("../models/message.js");
var messagesController = {

  DefaultPage : function (req, res) {
    db.getMessageRecive(req.session.user, function (resulf) {
      res.render("messages", {
          title: "Messages",
          layout: "application",
          user: req.session.user,
          message : resulf
      });
    });
  },
  loadMessagesSent : function (req, res) {
      db.getMessageSent(req.session.user, function (resulf) {
        res.send({messages : resulf});
      });
  },
  refreshMessage : function (req, res) {
    db.getMessageRecive(req.session.user, function (resulf) {
      res.send({messages : resulf});
    });
  },
  updateMessage : function (req, res) {
    db.CheckingMessage(req.body.Messages, function (messages) {
        res.send(messages);
    })
  }
}

module.exports = messagesController;
