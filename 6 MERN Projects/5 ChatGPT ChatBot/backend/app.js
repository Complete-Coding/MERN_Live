import dotenv from 'dotenv';
dotenv.config();

// External Module
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// Local Module
import * as errorController from "./controllers/errorController.js";
import conversationRouter from "./routers/conversationRouter.js";
import * as chatgptService from "./service/chatgptService.js";
const MONGO_DB_URL =
  `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@kgcluster.ie6mb.mongodb.net/${process.env.MONGO_DB_DATABASE}`;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api", conversationRouter);
app.use(errorController.get404);

const PORT = process.env.PORT || 3000;
mongoose.connect(MONGO_DB_URL).then(() => {
  chatgptService.initAIAssistant(() => {
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  });
});