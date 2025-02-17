import express from "express";
import bodyParser from "body-parser";
import userRouter from "./src/routes/user.router.js";
import authRouter from "./src/routes/auth.router.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", authRouter)

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});
