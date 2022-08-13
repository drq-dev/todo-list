import { Router } from "express";
import { Todo } from "../types/Todo";
import { TodoStatusEnum } from "../types/TodoStatus";

const router = Router();

router.get("/", async (req, res) => {
  const todos = await req.context.models.Todo.find();
  return res.send(todos);
});

router.get("/:todoId", async (req, res) => {
  const todo = await req.context.models.Todo.findById(req.params.todoId);
  return res.send(todo);
});

router.post("/", async (req, res) => {
  const todo = await req.context.models.Todo.create({
    description: req.body.description,
    status: TodoStatusEnum.OPEN,
  });

  return res.send(todo);
});

router.patch("/tick-todo/:todoId", async (req, res) => {
  const todo = await req.context.models.Todo.findById(req.params.todoId);
  if (todo) {
    todo.set({ status: TodoStatusEnum.TICKED_OFF });
    todo.save();
  }

  return res.send(todo);
});

export { router };
