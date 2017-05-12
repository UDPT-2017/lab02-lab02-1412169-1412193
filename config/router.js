var Router = require("express").Router;

var index = require("../app/controllers/index.js");

// register

// test
var SinhVien = [{
        id: 1,
        fullname: "Thai Hoc",
        email: "thaihocmap123@gmail.com",
        phone: "0987677383"
    },
    {
        id: 2,
        fullname: "Van A",
        email: "nguyenvana@gmail.com",
        phone: "0982131239"
    },
    {
        id: 3,
        fullname: "Van B",
        email: "nguyenvanB@gmail.com",
        phone: "0124354238"
    },
    {
        id: 4,
        fullname: "Van C",
        email: "nguyenvanC@gmail.com",
        phone: "0124354238"
    },
    {
        id: 5,
        fullname: "Van D",
        email: "nguyenvanD@gmail.com",
        phone: "0124354238"
    },
    {
        id: 9,
        fullname: "Van E",
        email: "nguyenvanE@gmail.com",
        phone: "0124354238"
    }
];

var DanhSachBanBe = [{
    id: 9,
    fullname: "Van E",
    email: "nguyenvanE@gmail.com",
    phone: "0124354238"
}];

module.exports = function(app) {

    var homeRouter = Router()
        .get("/", function(req, res) {
            res.render("home", {
                title: "Hello Home",
                layout: "application",
                user: req.session.user
            });
        });

    var userRouter = Router()
        .get("/", function() {});

    var aboutRouter = Router()
        .get("/", function() {});

    var messagesRouter = Router()
        .get("/", function() {});

    app.use("/", homeRouter);
    app.use("/user", userRouter);
    app.use("/photo", aboutRouter);
    app.use("/contact", messagesRouter);

    app.get("/login", function(req, res) {
        res.render("login", {
            title: "Login Page",
            layout: "application",
            user: req.session.user
        });
    });
    app.post("/login", index.featureUser.login);

    app.get("/register", function(req, res) {
        res.render("register", {
            title: "Register Page",
            layout: "application",
            user: req.session.user
        });
    });
    app.post("/register", index.featureUser.register);

    app.get("/about", function(req, res) {
        res.render("about", {
            title: "About Page",
            layout: "application",
            user: req.session.user
        });
    });






    app.get("/users", function(req, res) {
        res.render("user", {
            title: "User Page",
            layout: "application",
            user: req.session.user,
            sv: SinhVien,
            friends: DanhSachBanBe
        });
    });
    // test ajax
    app.get("/users/list", function(req, res) {
        res.send({
            sinhvien: SinhVien
        });
    });
    app.get("/users/friendlist", function(req, res) {
        res.send({
            listfriend: DanhSachBanBe
        });
    });
    app.get("/users/:id", function(req, res) {

    });
    // dung de add friend
    app.post("/users/addFriend", function(req, res) {
        DanhSachBanBe.push(req.body.friend);
        SinhVien.forEach(function(sv, index) {
            if (sv.id == req.body.friend.id) {
                SinhVien.splice(index, 1);
            }
        })
        res.send("Add friend is success !");
    });

    app.get("/messages", function (req, res) {
        res.end("Hello This is a messages !!");
    });

    app.get("/newmessage", function (req, res) {
        res.render("newmessages", {
            title: "New Messages",
            layout: "application",
            user: req.session.user,
            list: DanhSachBanBe
        });
    });

    app.post("/newmessage", function (req, res) {
        res.redirect("/messages");
    });




    // xet Router

    /*app.get("/",  );
    app.get("/albums", index.albums.defaultpage );
    app.get("/photo", index.photo.defaultpage);
    app.get("/singlePhoto/:id", index.photo.SinglePhoto );
    app.get("/contact", index.contact.show);
    app.post("/contact", index.contact.sendMessage);*/
}
