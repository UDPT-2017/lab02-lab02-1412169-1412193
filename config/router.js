
var Router = require("express").Router;

var index = require("../app/controllers/index.js");

module.exports = function(app) {

  var homeRouter = Router()
    .get("/", function (req, res) {
        res.render("home", {title: "Hello Home", layout: "application"});
    });

  var userRouter = Router()
    .get("/", function () {});

  var aboutRouter = Router()
    .get("/", function () {});

  var messagesRouter = Router()
    .get("/", function () {});

  app.use("/", homeRouter);
  app.use("/user", userRouter);
  app.use("/photo", aboutRouter);
  app.use("/contact", messagesRouter);
  app.get("/login", function (req, res) {
      res.render("login", {title: "Login Page", layout: "application"});
  });
  app.get("/register", function (req, res) {
      res.render("register", {title: "Register Page", layout: "application"});
  });
  // xet Router

  /*app.get("/",  );
  app.get("/albums", index.albums.defaultpage );
  app.get("/photo", index.photo.defaultpage);
  app.get("/singlePhoto/:id", index.photo.SinglePhoto );
  app.get("/contact", index.contact.show);
  app.post("/contact", index.contact.sendMessage);*/
}
