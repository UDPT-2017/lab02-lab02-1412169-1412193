var homeController = {
  homeDefault : function (req, res) {
    res.render("home", {
        title: "Hello Home",
        layout: "application",
        user: req.session.user
    });
  }
}

module.exports = homeController;
