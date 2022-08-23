import React, { useState } from "react";

import { ListItem } from "./ListItem";
import { TodoStatusEnum } from "../../types/TodoStatus";

const dummyTodoList = new Map();
dummyTodoList.set("t1", {
  _id: "t1",
  description: "Todo 1",
  status: TodoStatusEnum.OPEN,
});
dummyTodoList.set("t2", {
  _id: "t2",
  description: "Todo 2",
  status: TodoStatusEnum.OPEN,
});
dummyTodoList.set("t3", {
  _id: "t3",
  description: "Todo 3",
  status: TodoStatusEnum.TICKED_OFF,
});

const TodoList = () => {
  const [todos, setTodos] = useState(dummyTodoList);

  const tickOff = (todo) => {
    const newTodoList = new Map(todos);
    const newStatus =
      todo.status === TodoStatusEnum.OPEN
        ? TodoStatusEnum.TICKED_OFF
        : TodoStatusEnum.OPEN;
    newTodoList.set(todo._id, { ...todo, status: newStatus });
    setTodos(newTodoList);
  };

  const generateListItems = (todos) => {
    const listItems = [];
    for (let todo of todos.values())
      listItems.push(
        <ListItem key={todo._id} todo={todo} onChange={() => tickOff(todo)} />
      );
    return listItems;
  };

  return (
    <section
      aria-labelledby="heading"
      className="box w-full sm:w-[50%] px-6 py-4 bg-white rounded"
    >
      <h1 id="heading" className="text-center text-3xl">
        Todo List
      </h1>
      <ul className="mt-4">{generateListItems(todos)}</ul>
    </section>
  );
};

export { TodoList };
