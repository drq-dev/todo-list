import { Todo } from "./todo";
import mongoose from "mongoose";

const models = { Todo };

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

export { models, connectDb };
