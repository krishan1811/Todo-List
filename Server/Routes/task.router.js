import express, { Router } from "express";
const router = express.Router();
import {
  getTask,
  postTask,
  putTask,
  deleteTask,
} from "../Controllers/task.controller.js";

router.route("/task").get(getTask);

router.route("/task/post").post(postTask);

router.route("/task/update/:id").put(putTask);

router.route("/task/delete/:id").delete(deleteTask);

export default router;
