import "dotenv/config";

import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

const todos = {
  1: {
    id: "1",
    description: "First Todo",
  },
  2: {
    id: "2",
    description: "Second Todo",
  },
};

app.get("/todos", (req, res) => {
  return res.send(Object.values(todos));
});

app.get("/todos/:todoId", (req, res) => {
  return res.send(todos[req.params.todoId]);
});

// app.post("/todos", (req, res) => {
//   return res.send("POST HTTP method on user resource");
// });

// app.put("/todos/:todoId", (req, res) => {
//   return res.send(`PUT HTTP method on todos/${req.params.todoId} resource`);
// });

// app.delete("/todos/:todoId", (req, res) => {
//   return res.send(`DELETE HTTP method on todos/${req.params.todoId} resource`);
// });

app.listen(process.env.PORT, () =>
  console.log(
    `The server is started and can be reached at the port ${process.env.PORT}`
  )
);
