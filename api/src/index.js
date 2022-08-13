import "dotenv/config";

import { Todo } from "./types/Todo";
import { TodoStatusEnum } from "./types/TodoStatus";
import cors from "cors";
import express from "express";
import { models } from "./models/";

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

app.get("/todos", (req, res) => {
  return res.send(req.context.models.todos);
});

app.get("/todos/:todoId", (req, res) => {
  return res.send(
    req.context.models.todos.filter((todo) => todo.id === req.params.todoId)
  );
});

app.post("/todos", (req, res) => {
  const todo = new Todo({ description: req.body.description });

  req.context.models.todos.push(todo);

  res.send(todo);
});

app.patch("/todos/tick-todo/:todoId", (req, res) => {
  const todo = req.context.models.todos.filter(
    (todo) => todo.id === req.params.todoId
  );

  if (todo.length != 0) todo[0].status = TodoStatusEnum.TICKED_OFF;

  res.send(todo);
});

app.listen(process.env.PORT, () =>
  console.log(
    `The server is started and can be reached at the port ${process.env.PORT}`
  )
);
