import { TodoStatusEnum } from "./TodoStatus";
import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor({ description }) {
    this.id = uuidv4();
    this.description = description;
    this.status = TodoStatusEnum.OPEN;
  }
}

export { Todo };
