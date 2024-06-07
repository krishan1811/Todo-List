import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema({
  task: String,
  status: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
