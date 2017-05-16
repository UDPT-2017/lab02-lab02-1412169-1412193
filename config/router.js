var Router = require("express").Router;

var index = require("../app/controllers/index.js");

var checking = require("./functionChecking.js");

module.exports = function(app) {

    //index.home.homeDefault
    var homeRouter = Router().get("/", index.home.homeDefault);

    var userRouter = Router().get("/", function() {});

    var aboutRouter = Router().get("/", function() {});

    var messagesRouter = Router().get("/", function() {});

    app.get("/login", checking.isLoggedLong , index.featureUser.loginDefault);
    app.post("/login", index.featureUser.login);

    app.get("/register", index.featureUser.registerDefault);
    app.post("/register", index.featureUser.register);

    app.get("/about", index.about.aboutDefault);

    app.get("/users", checking.isLoggedIn, index.user.DefaultPage);
    app.get("/users/list", checking.isLoggedIn, index.user.refreshUser);
    app.get("/users/friendlist", checking.isLoggedIn, index.user.refreshListFriend);
    app.post("/users/addFriend", checking.isLoggedIn, index.user.PushUser);

    app.get("/newmessage", checking.isLoggedIn, index.newmessages.newmessageDefault);
    app.post("/newmessage", checking.isLoggedIn, index.newmessages.processnewmessage);


    app.get("/messages",checking.isLoggedIn, index.message.DefaultPage);
    app.get("/messages/messSend",checking.isLoggedIn, index.message.loadMessagesSent);
    app.get("/messages/messRecieve",checking.isLoggedIn, index.message.refreshMessage);
    app.post("/messages/updateMess", checking.isLoggedIn, index.message.updateMessage);

    // xay dung logout
    app.get("/logout", index.other.logout);

    app.use("/", homeRouter);
    app.use("/user", userRouter);
    app.use("/photo", aboutRouter);
    app.use("/contact", messagesRouter);

    // truong hop ko co
    app.use(function (req,res) {
      res.end("Hello world");
    })
}
