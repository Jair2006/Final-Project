import express from "express";
import bodyParser from "body-parser";
import userRouter from "./src/routes/user.router.js";
<<<<<<< HEAD
import authRouter from "./src/routes/auth.router.js";
=======
import itemRouter from "./src/routes/item.router.js";
>>>>>>> 34067af3ee432bfef081bebeb4f0361b968c2bee

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", userRouter);
<<<<<<< HEAD
app.use("/auth", authRouter)
=======
app.use("items", itemRouter);
>>>>>>> 34067af3ee432bfef081bebeb4f0361b968c2bee

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});
