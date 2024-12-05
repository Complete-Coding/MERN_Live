const express = require("express");
const conversationController = require("../controllers/conversationController");
const conversationRouter = express.Router();

conversationRouter.post("/conversation", conversationController.newConversation);
conversationRouter.put("/conversation/:id", conversationController.newMessage);

module.exports = conversationRouter;
