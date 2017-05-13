var user = require("../OP/user.js"); // khai bao user
var db = require("../models/user.js"); // xu ly feature

function Checking(value) {
  var resulf = value === undefined || value.trim() === "" || value.length === 0;
  return resulf;
}
var feature = {
  registerDefault: function (req, res) {
    res.render("register", {
        title: "Register Page",
        layout: "application",
        user: req.session.user
    });
  },
  loginDefault: function (req, res) {
    res.render("login", {
        title: "Login Page",
        layout: "application",
        user: req.session.user
    });
  },
  register: function (req, res) {
     user.email = req.body.femail;
     user.password = req.body.fpassword;
     user.fullname = req.body.fname;
     user.phone = req.body.fphone;

     if (Checking(user.email) || Checking(user.password) || Checking(user.fullname) || Checking(user.phone)){
       // neu checking tra ve true thi tra ve sai
       res.render("register", {
         title: "Register",
         layout: "application",
         FailMess : "Register is Fail!"
       });
     }
     else {
       // neu checking tra ve fail thi tra ve dung
       // connect den DB
       db.saveUser(user, function (text, message) {
           if(text === "0") {
             res.render("register", {
               title: "Register",
               layout: "application",
               FailMess : message
             });
           }
           else if(text === "2") {
             res.render("register", {
               title: "Register",
               layout: "application",
               FailMess : message
             });
           } else {
             res.render("register", {
               title: "Register",
               layout: "application",
               successMess : message
             });
           }
       });
     }
  },
  login : function (req, res) {
      var email = req.body.femail;
      var password = req.body.fpassword;

      db.checkUser(email, password, function (text, message, userPre) {
          // text chua loai loi . message : ten loi, user gia tri tra ve de ghi vao session
          if(text === "0") {
            res.render ("login", {
              title: "login",
              layout: "application",
              FailMess: message,
              user : req.session.user
            });
          }else {
            req.session.user = userPre;
            res.render ("login", {
              title: "login",
              layout: "application",
              successMess: message,
              user : req.session.user
            });
          }
      });
  }
};

module.exports = feature;
