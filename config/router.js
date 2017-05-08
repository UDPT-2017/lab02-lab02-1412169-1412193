
var Router = require("express").Router;

var index = require("../app/controllers/index.js");

// register
function Checking(value) {
  var resulf = value === undefined || value.trim() === "" || value.length === 0;
  return resulf;
}


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
  app.post("/register", function (req, res) {
      // xu ly chuc nang dang ky
      console.log(req.body);
      var email = req.body.femail;
      var password = req.body.fpassword;
      var fullname = req.body.fname;
      var phone = req.body.fphone;

      if (Checking(email) || Checking(password) || Checking(fullname) || Checking(phone)){
        // neu checking tra ve true thi tra ve sai
        res.render("register", {
          title: "HBS Contact PAGE",
          message: "Contact US",
          layout: "application",
          FailMess : "Register is Fail !"
        });
      }
      else {
        // neu checking tra ve fail thi tra ve dung
        // connect den DB
        
      }
  });
  app.get("/about", function (req, res) {
      res.render("about", {title: "About Page", layout: "application"});
  });

  // xet Router

  /*app.get("/",  );
  app.get("/albums", index.albums.defaultpage );
  app.get("/photo", index.photo.defaultpage);
  app.get("/singlePhoto/:id", index.photo.SinglePhoto );
  app.get("/contact", index.contact.show);
  app.post("/contact", index.contact.sendMessage);*/
}
