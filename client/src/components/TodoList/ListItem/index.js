import React from "react";
import { TodoStatusEnum } from "../../../types/TodoStatus";

const ListItem = ({ todo, onChange }) => {
  const { _id, description, status } = todo;
  return (
    <li className="flex justify-between py-2 border-b first:border-t">
      <label htmlFor={_id}>{description}</label>
      <input
        id={_id}
        name={_id}
        type="checkbox"
        checked={status === TodoStatusEnum.TICKED_OFF}
        onChange={onChange}
      />
    </li>
  );
};

export { ListItem };
