import express from "express";
import { logIn, register, updatePassword } from "../controllers/auth.controller.js";
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

authRouter.put("/updatePassword/:id",isAdmin, (req, res) => {
  updatePassword(req.params.id,req.body)
  .then((data) => {
    if (data) {
      res
        .status(200)
        .json({ message: "Password updated successfully", data: data });
    } else {
      res.status(404).json({ message: "Password not update", data: data });
    }
  })
  .catch((err) => {
    console.error("Error on PUT /updatePassword route:", err);
    res.status(500).json({ message: err });
  });
});

export default authRouter;
