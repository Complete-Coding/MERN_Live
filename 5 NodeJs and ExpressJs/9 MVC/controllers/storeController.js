const Home = require("./../models/Home");

exports.getHome = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render("index", { homes: registeredHomes, pageTitle: "Tumahara airbnb" });
  });
};
