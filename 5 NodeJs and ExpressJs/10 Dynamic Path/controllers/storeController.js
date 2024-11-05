const Favourite = require("../models/Favourite");
const Home = require("./../models/Home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render("store/index", { homes: registeredHomes, pageTitle: "Tumahara airbnb" });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render("store/homes", { homes: registeredHomes, pageTitle: "Tumahara airbnb" });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.fetchAll(favouriteIds => {
    Home.fetchAll(registeredHomes => {
      const favouriteHomes = registeredHomes.filter(home => favouriteIds.includes(home.id));
      res.render("store/favourites", { homes: favouriteHomes, pageTitle: "Favourites" });
    });
  })

};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.addToFavourites(homeId, error => {
    if (error) {
      console.log("Error while adding to favourites", error);
    }
    res.redirect("/favourites");
  })
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, error => {
    if (error) {
      console.log('Error while remove from favourites ', error);
    }
    res.redirect("/favourites");
  })
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId, home => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail" });
  })
}
