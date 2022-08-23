import React from "react";
import { TodoStatusEnum } from "../../../types/TodoStatus";

const ListItem = ({ todo, onChange }) => {
  const { _id, description, status } = todo;
  return (
    <li className="flex justify-between px-1 py-2 border-b first:border-t hover:bg-slate-100">
      <label htmlFor={_id} className="cursor-pointer grow">
        {description}
      </label>
      <input
        id={_id}
        name={`checbox-${_id}`}
        type="checkbox"
        checked={status === TodoStatusEnum.TICKED_OFF}
        onChange={onChange}
        className="cursor-pointer accent-blue-500"
      />
    </li>
  );
};

export { ListItem };
