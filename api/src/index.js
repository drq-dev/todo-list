import "dotenv/config";

import { Todo } from "./types/Todo";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todos = [
  new Todo({ description: "First Todo" }),
  new Todo({ description: "Second Todo" }),
];

app.get("/todos", (req, res) => {
  return res.send(todos);
});

app.get("/todos/:todoId", (req, res) => {
  return res.send(todos.filter((todo) => todo.id === req.params.todoId));
});

app.post("/todos", (req, res) => {
  const todo = new Todo({ description: req.body.description });

  todos.push(todo);

  res.send(todo);
});

app.listen(process.env.PORT, () =>
  console.log(
    `The server is started and can be reached at the port ${process.env.PORT}`
  )
);
