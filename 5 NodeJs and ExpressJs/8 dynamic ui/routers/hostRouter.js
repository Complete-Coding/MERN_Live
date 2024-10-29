const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", {pageTitle: 'Host Your Home'});
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push(req.body);
  res.render("home-added", {pageTitle: 'Home Hosted'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
