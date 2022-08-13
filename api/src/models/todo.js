import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export { Todo };
