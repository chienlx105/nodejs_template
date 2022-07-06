import express from "express";

import authController from "../controller/authController";

const router = express.Router();

let initWebRoute = (app) => {
  router.get("/", authController.register);
  app.use("/", router);
};

export default initWebRoute;
