import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./router/user.router";

const app = express();

const PORT = 5000;

/** MIDDLEWARES */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

/** API ROUTES */

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
