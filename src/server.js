import express from "express";
import cors from "cors";
import bp from "body-parser";

import configViewEngine from "./config/viewEngine";
import connect from "./config/connectDB";
import initWebRoute from "./route/webRoute";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: true }));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//config
configViewEngine(app);
connect();

// init router
initWebRoute(app);

//listen
app.listen(port, () => {
  console.log(`listen to http://localhost:${port}`);
});
