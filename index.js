import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import userRouter from "./routes/users.route.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import connection from "./utils/db.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

/* CONFIGURATION */
const app = express();
const port = process.env.PORT || 8080;
//* adding request body parser middleware
app.use(express.json());
//* adding cookier parser middleware
app.use(cookieParser());

//swagger setup
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "reachhub",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It serves API endpoints to reachhub client app.",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//? routes
app.use("/api/users", userRouter);

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
