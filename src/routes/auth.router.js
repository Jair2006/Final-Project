import express from "express";
import { logIn, register } from "../controllers/auth.controller.js";
import { isAdmin } from "../middlewares/auth.js";

const authRouter = express.Router();

authRouter.post("/register", isAdmin, (req, res) => {
  register(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error on POST /register route: ", err);
      res.status(500).json({ message: err });
    });
});

authRouter.post("/logIn", (req, res) => {
  logIn(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error on POST /logIn route: ", err);
      res.status(500).json({ message: err.message });
    });
});

export default authRouter;
