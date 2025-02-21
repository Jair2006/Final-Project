import express from "express";
import { isAdmin } from "../middlewares/auth.js";
import {
  createBranch,
  deleteBranch,
  getBranchById,
  getBranchBySearch,
  getBranchs,
  updateBranch,
} from "../controllers/branch.controller.js";

const branchRouter = express.Router();

branchRouter.post("/", (req, res) => {
  createBranch(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error on POST / route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.get("/", isAdmin, (req, res) => {
  getBranchs()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error on GET / route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.get("/search", isAdmin, (req, res) => {
  getBranchBySearch(req.query)
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

branchRouter.get("/:id", isAdmin, (req, res) => {
  getBranchById(req.params.id)
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

branchRouter.put("/:id", isAdmin, (req, res) => {
  updateBranch(req.params.id, req.body)
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

branchRouter.patch("/:id", isAdmin, (req, res) => {
  updateBranch(req.params.id, req.body)
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
      console.error("Error on PAtch /:id route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.delete("/:id", isAdmin, (req, res) => {
  deleteBranch(req.params.id)
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

export default branchRouter;
