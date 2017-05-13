var about = {
  aboutDefault : function (req, res) {
    res.render("about", {
        title: "About Page",
        layout: "application",
        user: req.session.user
    });
  }
}

module.exports = about;
