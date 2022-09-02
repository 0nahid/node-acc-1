import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
const app: Application = express();
/* middleware  */
app.use(cors());
app.use(express.json());

/* here will be all the imports routes */
import { default as testRoute, default as userRouter } from "./routes/v1/test";

/* here will be the all the routes */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

/* Here is the User Routes */
app.use("/api/v1/test", testRoute);
app.use("/user", userRouter);

// 404 response
app.all("*", (req: Request, res: Response) => {
  res.status(404).send({
    message: "Not Found",
    status: 404,
  });
});
export { app };
