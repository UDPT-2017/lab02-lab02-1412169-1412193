
var Router = require("express").Router;

var index = require("../app/controllers/index.js");

// register

// test
var SinhVien = [
  {
    fullname: "Thai Hoc",
    email: "thaihocmap123@gmail.com",
    phone: "0987677383"
  },
  {
    fullname: "Van A",
    email: "nguyenvana@gmail.com",
    phone: "0982131239"
  },
  {
    fullname: "Van B",
    email: "nguyenvanB@gmail.com",
    phone: "0124354238"
  },
  {
    fullname: "Van C",
    email: "nguyenvanC@gmail.com",
    phone: "0124354238"
  },
  {
    fullname: "Van D",
    email: "nguyenvanD@gmail.com",
    phone: "0124354238"
  },
  {
    fullname: "Van E",
    email: "nguyenvanE@gmail.com",
    phone: "0124354238"
  }
];

module.exports = function(app) {

  var homeRouter = Router()
    .get("/", function (req, res) {
        res.render("home", {title: "Hello Home", layout: "application", user: req.session.user});
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
      res.render("login", {title: "Login Page", layout: "application", user: req.session.user});
  });
  app.post("/login", index.featureUser.login);

  app.get("/register", function (req, res) {
      res.render("register", {title: "Register Page", layout: "application", user: req.session.user});
  });
  app.post("/register", index.featureUser.register);

  app.get("/about", function (req, res) {
      res.render("about", {title: "About Page", layout: "application" , user: req.session.user});
  });


  app.get("/users", function (req, res) {
      res.render("user", {title: "User Page", layout: "application" , user: req.session.user});
  });

  // test ajax
  app.get("/friends", function (req, res) {
      res.send({sinhvien: SinhVien});
  });
  // xet Router

  /*app.get("/",  );
  app.get("/albums", index.albums.defaultpage );
  app.get("/photo", index.photo.defaultpage);
  app.get("/singlePhoto/:id", index.photo.SinglePhoto );
  app.get("/contact", index.contact.show);
  app.post("/contact", index.contact.sendMessage);*/
}
