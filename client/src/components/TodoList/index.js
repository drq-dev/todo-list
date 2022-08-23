import React from "react";

const TodoList = () => {
  return (
    // width: 50%;
    <section
      aria-labelledby="heading"
      className="box w-full sm:w-[50%] px-6 py-4 bg-white rounded"
    >
      <h1 id="heading" className="text-center text-3xl">
        Todo List
      </h1>
      <ul className="mt-4">
        <li className="py-2 border-b first:border-t">
          <label>
            Task 1
            <input type="checkbox" />
          </label>
        </li>
        <li className="py-2 border-b first:border-t">
          <label>
            Task 2
            <input type="checkbox" />
          </label>
        </li>
        <li className="py-2 border-b first:border-t">
          <label>
            Task 3
            <input type="checkbox" />
          </label>
        </li>
      </ul>
    </section>
  );
};

export { TodoList };
