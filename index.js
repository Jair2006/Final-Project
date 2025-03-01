import express from "express";
import bodyParser from "body-parser";
import userRouter from "./src/routes/user.router.js";
import authRouter from "./src/routes/auth.router.js";
import itemRouter from "./src/routes/item.router.js";
import branchRouter from "./src/routes/branch.router.js";
import InfoRouter from "./src/routes/info.router.js";
import infoRouter from "./src/routes/info.router.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", userRouter);
app.use("/items", itemRouter);
app.use("/auth", authRouter);
app.use("/branch", branchRouter);
app.use("/info", infoRouter);

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});
