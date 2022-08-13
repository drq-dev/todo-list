import { Todo } from "../types/Todo";

const todos = [
  new Todo({ description: "First Todo" }),
  new Todo({ description: "Second Todo" }),
];

const models = { todos: todos };

export { models };
