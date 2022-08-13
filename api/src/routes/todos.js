import { Router } from "express";
import { Todo } from "../types/Todo";
import { TodoStatusEnum } from "../types/TodoStatus";

const router = Router();

router.get("/", (req, res) => {
  return res.send(req.context.models.todos);
});

router.get("/:todoId", (req, res) => {
  return res.send(
    req.context.models.todos.filter((todo) => todo.id === req.params.todoId)
  );
});

router.post("/", (req, res) => {
  const todo = new Todo({ description: req.body.description });

  req.context.models.todos.push(todo);

  res.send(todo);
});

router.patch("/tick-todo/:todoId", (req, res) => {
  const todo = req.context.models.todos.filter(
    (todo) => todo.id === req.params.todoId
  );

  if (todo.length != 0) todo[0].status = TodoStatusEnum.TICKED_OFF;

  res.send(todo);
});

export { router };
