import express from "express";
import * as conversationController from "../controllers/conversationController.js";
const conversationRouter = express.Router();

conversationRouter.get("/conversation", conversationController.getConversations);
conversationRouter.post("/conversation", conversationController.newConversation);
conversationRouter.put("/conversation/:id", conversationController.newMessage);
conversationRouter.delete("/conversation/:id", conversationController.deleteConversation);

export default conversationRouter;