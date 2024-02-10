import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import userRouter from "./routes/users.route.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import connection from "./utils/db.js";
import {
  getCsv,
  getRatingHistory,
  getTopPlayers,
} from "./controllers/players.controller.js";

/* CONFIGURATION */
const app = express();
const port = process.env.PORT || 8080;
//* adding request body parser middleware
app.use(express.json());
//* adding cookier parser middleware
app.use(cookieParser());

//? routes
app.use("/api/users", userRouter);
app.get("/api/top-players", getTopPlayers);
app.get("/api/player/:username/rating-history", getRatingHistory);
app.get("/api/players/rating-history-csv", getCsv);

//adding error handler middleware
app.use(errorHandler);

app.listen(port, async () => {
  try {
    await connection(process.env.DBURL);
    console.log("connected to database");
    console.log(`app is listening on port: ${port}`);
  } catch (error) {
    console.log(error);
  }
});
