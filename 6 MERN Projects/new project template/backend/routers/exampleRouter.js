const express = require("express");
const exampleController = require("../controllers/exampleController");
const exampleRouter = express.Router();

exampleRouter.get("/", exampleController.getExample);

module.exports = exampleRouter;
