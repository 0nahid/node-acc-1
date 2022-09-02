import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";

const app: Application = express();
/* middleware  */
app.use(cors());
app.use(express.json());

/* here will be all the imports routes */
import { default as userRouter } from "./routes/v1/users.route";

/* here will be the all the routes */
app.get("/", (req: Request, res: Response) => {
  res.send(`
  <h1>Welcome to the User API</h1>
  <p>Here are the available routes</p>
  <ul>
    <li><a href="/">/home</a></li>
    <li><a href="/user/random">/user/random</a></li>
    <li><a href="/user/1">/user/:id</a></li>
    <li><a href="/user/all">/user/all</a></li>
    <li><a href="/user/save">/user/save</a></li>
    <li><a href="/user/patch">/user/patch</a></li>
    <li><a href="/user/patch/bulk-update">/user/patch/bulk-update</a></li>
    <li><a href="/user/:id">/user/delete</a></li>
  </ul>`);
});

/* Here is the User Routes */
app.use("/user", userRouter);

// 404 response
app.all("*", (req: Request, res: Response) => {
  res.status(404).send({
    message: "Not Found",
    status: 404,
  });
});
export { app };
