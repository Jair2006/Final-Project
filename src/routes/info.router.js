import { getInfo, updateInfo } from "../controllers/info.controller.js";
import express from "express";
import { isAdmin } from "../middlewares/auth.js";

const infoRouter = express.Router();

infoRouter.get("/", (req, res) => {
  getInfo()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error on GET / route:", err);
      res.status(500).json({ message: err });
    });
});

infoRouter.put("/", isAdmin, (req, res) => {
  updateInfo(req.body)
    .then((data) => {
      if (data) {
        res.status(201).json({ message: "Info updated.", data: data });
      } else {
        res.status(400).json({ message: "Info not updated.", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on PUT / router:", err);
      res.status(500).json({ message: err });
    });
});

export default infoRouter;
