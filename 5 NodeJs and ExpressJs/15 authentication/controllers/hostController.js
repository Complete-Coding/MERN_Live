const Home = require("../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    editing: false,
    pageTitle: "Host Your Home",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  if (!editing) {
    console.log("Editing flag not set properly");
    return res.redirect("/host/host-homes");
  }

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }

    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      editing: editing,
      pageTitle: "Edit Your Home",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } = req.body;
  const newHome = new Home({
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
    host: req.session.user._id,
  });

  newHome.save().then(() => {
    res.redirect("/host/host-homes");
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
  // business logic outside model
  Home.findById(id)
    .then((existingHome) => {
      if (!existingHome) {
        console.log("Home not found for editing");
        return res.redirect("/host/host-homes");
      }
      existingHome.houseName = houseName;
      existingHome.price = price;
      existingHome.location = location;
      existingHome.rating = rating;
      existingHome.photoUrl = photoUrl;
      existingHome.description = description;
      return existingHome.save();
    })
    .finally(() => {
      return res.redirect("/host/host-homes");
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete ", homeId);
  Home.findByIdAndDelete(homeId).then(() => {
    res.redirect("/host/host-homes");
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.find({host: req.session.user._id}).then((registeredHomes) => {
    console.log(registeredHomes);
    res.render("host/host-homes", {
      homes: registeredHomes,
      pageTitle: "Host Homes",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
