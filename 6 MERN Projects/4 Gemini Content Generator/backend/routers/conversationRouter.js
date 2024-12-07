const express = require("express");
const conversationController = require("../controllers/conversationController");
const conversationRouter = express.Router();

conversationRouter.get("/conversation", conversationController.getConversations);
conversationRouter.post("/conversation", conversationController.newConversation);
conversationRouter.put("/conversation/:id", conversationController.newMessage);
conversationRouter.delete("/conversation/:id", conversationController.deleteConversation);

module.exports = conversationRouter;
