
var Router = require("express").Router;
var index = require("../app/controllers/index.js");


var headLineSend = [{
    id: "SL",
    reciever: "Người nhận",
    content: "Nội dung",
    timeSend: "Thời gian gửi",
    timeRead: "Thời gian đọc"
}]

var headLineRecieve = [{
    id: "SL",
    sender: "Người gửi",
    content: "Nội dung",
    timeRecieve: "Thời gian nhận"
}]

// register
var messSend = [{
    id: 0,
    reciever: "nguyenduchaicactus@gmail.com",
    content: "Pseudo-classes allow to select elements 1111",
    timeSend: "2017-01-08 05:05:06",
    timeRead: "2017-01-08 05:05:06",
  },
  {
    id: 1,
    reciever: "nguyenduchaicactus@gmail.com",
    content: "Pseudo-classes allow to select elements 2222",
    timeSend: "2017-01-08 05:05:06",
    timeRead: "2017-01-08 05:05:06",
  }
];

var messRecieve = [{
    id: 0,
    sender: "nguyenduchaicactus@gmail.com",
    title: "aaaaa aaaaa aaaaa aaaaa aaaaa aaaaaa aaaaaa aaaaa",
    content: "Pseudo-classes allow to select elements 1111",
    timeRecieve: "2017-01-08 05:05:06",
    state: 1
  },
  {
    id: 1,
    sender: "nguyenduchaicactus@gmail.com",
    title: "aaaaa aaaa aaaaa aaaaa aaaaaa aaaaaaaa aaaa aaaaa",
    content: "Pseudo-classes allow to select elements 1111",
    timeRecieve: "2017-01-08 05:05:06",
    state: 0
  },
  {
    id: 2,
    title: "aaaa aaaa aaaaa aaaaa aaaaaa aaaaa aaaa aaaaa aaaa",
    sender: "nguyenduchaicactus@gmail.com",
    content: "Pseudo-classes allow to select elements 1111",
    timeRecieve: "2017-01-08 05:05:06",
    state: 0
  },
  {
    id: 3,
    title: "aaaaa aaa aaaaa aaaa aaaaa aaaaaa aaaaa aaaa aaaaa",
    sender: "nguyenduchaicactus@gmail.com",
    content: "Pseudo-classes allow to select elements 1111",
    timeRecieve: "2017-01-08 05:05:06",
    state: 0
  },
]
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
  app.get("/messages", function (req,res) {
      res.render("messages", {title: "Message Page", layout: "application" , user: req.session.user});
  });
app.get("/messSend",function(req,res){
    res.send({ messSend: messSend, headLineSend:headLineSend});
});
app.get("/messRecieve",function(req,res){
    res.send({ messRecieve: messRecieve, headLineRecieve:headLineRecieve});
});
app.put('/updateMess', function(req,res){
    var idRecieve = req.body.idRecieve;
    messRecieve.forEach(function(m) {
        if (m.id === Number(idRecieve)) {
          m.state = 1;
        }
      })
      res.send('Succesfully updated!');
});

  // xet Router

  /*app.get("/",  );
  app.get("/albums", index.albums.defaultpage );
  app.get("/photo", index.photo.defaultpage);
  app.get("/singlePhoto/:id", index.photo.SinglePhoto );
  app.get("/contact", index.contact.show);
  app.post("/contact", index.contact.sendMessage);*/
}
