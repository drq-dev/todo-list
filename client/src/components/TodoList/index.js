import React, { useLayoutEffect, useRef, useState } from "react";

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
  const [createNewTodo, setCreateNewTodo] = useState(false);

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

  const createNewTodoInputId = useRef(null);
  useLayoutEffect(() => {
    if (createNewTodo) createNewTodoInputId.current.focus();
  }, [createNewTodo, createNewTodoInputId]);

  const addNewTodo = (event) => {
    const description = event.target.elements.textInput.value;
    const newTodoList = new Map(todos);
    /**
     * Currently still using the description as ID. This is changed when the API is bound to the frontend. Then the API  determines the ID.
     */
    /**
     * TODO: Prevent dublicated entries
     */
    newTodoList.set(description, {
      _id: description,
      description: description,
      status: TodoStatusEnum.OPEN,
    });
    setTodos(newTodoList);
    setCreateNewTodo(false);

    event.preventDefault();
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

      <form onSubmit={addNewTodo} className="mt-2">
        {!createNewTodo ? (
          <button
            type="button"
            onClick={() => setCreateNewTodo(true)}
            className="bg-blue-500 hover:bg-blue-400 text-white rounded p-1 "
          >
            + Neues Todo
          </button>
        ) : (
          <input
            ref={createNewTodoInputId}
            type="text"
            required
            name="textInput"
            className="border bg-slate-50 w-full"
          ></input>
        )}
      </form>
    </section>
  );
};

export { TodoList };
