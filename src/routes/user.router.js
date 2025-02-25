import express from "express";
import {
  createUser,
  getUserById,
  getUserBySearch,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { isAdmin } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/", isAdmin, (req, res) => {
  createUser(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error on POST / route:", err);
      res.status(500).json({ message: err });
    });
});

userRouter.get("/", isAdmin, (req, res) => {
  getUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error on GET / route:", err);
      res.status(500).json({ message: err });
    });
});

userRouter.get("/search", isAdmin, (req, res) => {
  getUserBySearch(req.query)
    .then((data) => {
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      console.error("Error on GET /search route:", err);
      res.status(500).json({ message: err });
    });
});

userRouter.get("/:id", isAdmin, (req, res) => {
  getUserById(req.params.id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      console.error("Error on GET /:id route:", err);
      res.status(500).json({ message: err });
    });
});

userRouter.put("/:id", isAdmin, (req, res) => {
  updateUser(req.params.id, req.body)
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ message: "User updated successfully", data: data });
      } else {
        res.status(404).json({ message: "User not update", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on PUT /:id route:", err);
      res.status(500).json({ message: err });
    });
});

userRouter.delete("/:id", isAdmin, (req, res) => {
  deleteUser(req.params.id)
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ message: "User deleted successfully", data: data });
      } else {
        res.status(404).json({ message: "User not found", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on DELETE /:id route:", err);
      res.status(500).json({ message: err });
    });
});

export default userRouter;
