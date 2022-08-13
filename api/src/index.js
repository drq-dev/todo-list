import "dotenv/config";

import cors from "cors";
import express from "express";
import { models } from "./models/";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use("/todos", routes.todos);

app.listen(process.env.PORT, () =>
  console.log(
    `The server is started and can be reached at the port ${process.env.PORT}`
  )
);
