import express from "express";
import { isAdmin } from "../middlewares/auth.js";
import {
  addContact,
  addItem,
  createBranch,
  deleteBranch,
  deleteContact,
  deleteItem,
  getBranchById,
  getBranchBySearch,
  getBranches,
  updateBranch,
  updateContact,
  updateItem,
} from "../controllers/branch.controller.js";

const branchRouter = express.Router();

branchRouter.post("/", isAdmin, (req, res) => {
  createBranch(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error on POST / route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.post("/:id/item/:itemId", isAdmin, (req, res) => {
  addItem(req.params.id, req.params.itemId, req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error on POST /:id/item/:itemId route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.post("/:id/contact", isAdmin, (req, res) => {
  addContact(req.params.id, req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error("Error on POST /:id/contact route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.put("/:id/item/:itemId", isAdmin, (req, res) => {
  updateItem(req.params.id, req.params.itemId, req.body)
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ message: "Branch-Item updated successfully", data: data });
      } else {
        res.status(404).json({ message: "Branch-Item not update", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on PUT /:id/item/:itemId route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.put("/:id/contact/:contactId", isAdmin, (req, res) => {
  updateContact(req.params.id, req.params.contactId, req.body)
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ message: "Contact updated successfully", data: data });
      } else {
        res.status(404).json({ message: "Contact not update", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on PUT /:id/contact/:contactId route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.delete("/:id/item/:itemId", isAdmin, (req, res) => {
  deleteItem(req.params.id, req.params.itemId)
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ message: "Branch-Item deleted successfully", data: data });
      } else {
        res.status(404).json({ message: "Branch not found", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on DELETE /:id/item/:itemId route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.delete("/:id/contact/:contactId", isAdmin, (req, res) => {
  deleteContact(req.params.id, req.params.contactId)
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ message: "Contact deleted successfully", data: data });
      } else {
        res.status(404).json({ message: "Contact not found", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on DELETE /:id/contact/:contactId route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.get("/", (req, res) => {
  getBranches()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error on GET / route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.get("/search", (req, res) => {
  getBranchBySearch(req.query)
    .then((data) => {
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Branch not found" });
      }
    })
    .catch((err) => {
      console.error("Error on GET /search route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.get("/:id", (req, res) => {
  getBranchById(req.params.id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Branch not found" });
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
          .json({ message: "Branch updated successfully", data: data });
      } else {
        res.status(404).json({ message: "Branch not update", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on PUT /:id route:", err);
      res.status(500).json({ message: err });
    });
});

branchRouter.delete("/:id", isAdmin, (req, res) => {
  deleteBranch(req.params.id)
    .then((data) => {
      if (data) {
        res
          .status(200)
          .json({ message: "Branch deleted successfully", data: data });
      } else {
        res.status(404).json({ message: "Branch not found", data: data });
      }
    })
    .catch((err) => {
      console.error("Error on DELETE /:id route:", err);
      res.status(500).json({ message: err });
    });
});

export default branchRouter;
