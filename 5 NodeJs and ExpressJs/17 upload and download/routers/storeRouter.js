const express = require("express");
const storeController = require("../controllers/storeController");
const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/homes/:homeIdentity", storeController.getHomeDetails);
storeRouter.get("/favourites", storeController.getFavourites);
storeRouter.post("/favourites", storeController.postAddFavourites);
storeRouter.post(
  "/favourites/delete/:homeId",
  storeController.postRemoveFavourite
);
storeRouter.get('/rules/:houseId', storeController.getRules);

module.exports = storeRouter;
