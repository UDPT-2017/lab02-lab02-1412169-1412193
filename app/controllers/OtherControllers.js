var otherController = {
  logout: function (req, res) {
    req.session.destroy(); // huy session hien tai
    res.redirect('/');
  }
}

module.exports = otherController
