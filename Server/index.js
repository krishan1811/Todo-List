import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes/task.router.js";

const task_routes = router;

// configuration of dotenv
const env = dotenv.config().parsed;

// creating app
const app = express();

// connecting mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

//middeleware
app.use(express.json()); // converting all express intrection in json
app.use(cors()); // modifying cors policy
app.use("/api/", task_routes);

//app is listening on port
app.listen(process.env.PORT, () =>
  console.log("Server is running on ", process.env.PORT)
);
