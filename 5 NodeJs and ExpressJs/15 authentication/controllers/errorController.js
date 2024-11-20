exports.get404 = (req, res, next) => {
  res.statusCode = 404;
  res.render("404", {
    pageTitle: "Page Not Found",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};
