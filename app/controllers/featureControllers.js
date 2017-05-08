var user = require("../models/user.js"); // khai bao user
var db = require("../models/database.js");

function Checking(value) {
  var resulf = value === undefined || value.trim() === "" || value.length === 0;
  return resulf;
}
var feature = {
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
  }
};
module.exports = feature;
