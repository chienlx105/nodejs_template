import express from "express";

import homeController from "../controller/homeController";

const router = express.Router();

let initWebRoute = (app) => {
  router.get("/", homeController.getHome);
  app.use("/", router);
};

export default initWebRoute;
