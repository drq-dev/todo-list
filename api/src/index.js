import "dotenv/config";

import { connectDb, models } from "./models/";

import { TodoStatusEnum } from "./types/TodoStatus";
import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use("/todos", routes.todos);

const eraseDatabaseOnSync = true;

const createTodos = async () => {
  const todo1 = new models.Todo({
    description: "First Todo",
    status: TodoStatusEnum.OPEN,
  });

  await todo1.save();

  const todo2 = new models.Todo({
    description: "Second Todo",
    status: TodoStatusEnum.OPEN,
  });

  await todo2.save();
};

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([models.Todo.deleteMany({})]);

    createTodos();
  }
  app.listen(process.env.PORT, () =>
    console.log(
      `The server is started and can be reached at the port ${process.env.PORT}`
    )
  );
});
