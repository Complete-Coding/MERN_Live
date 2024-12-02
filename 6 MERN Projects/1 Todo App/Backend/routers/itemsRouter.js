const express = require("express");
const itemsController = require("../controllers/itemsController");
const itemsRouter = express.Router();

itemsRouter.post("/todos", itemsController.postTodoItem);

module.exports = itemsRouter;
