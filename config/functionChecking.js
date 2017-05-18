var functionCheck = {
  isLoggedIn : function (req, res, next) {
    // neu nhu chua dang nhap thi dang nhap
    if (req.session.user !== undefined){
      return next();

    }else {
      res.redirect('/login');
    }
  },
  isLoggedLong : function (req, res, next) { // neu nhu da dang nhap roi thi ....
    if (req.session.user !== undefined){
      res.redirect('/');
    }else {
      return next();
    }
  }
}

module.exports = functionCheck;
