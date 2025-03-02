const express = require("express");
const router = express.Router();
const {
  createAttention,
  getAllAttention,
  getAttentionById,
  updateAttention,
  deleteAttention,
} = require("../controllers/attentionController");

// Create a new record
router.post("/", createAttention);

// Get all records
router.get("/", getAllAttention);

// Get a single record by _id
router.get("/:id", getAttentionById);

// Update a record by _id
router.put("/:id", updateAttention);

// Delete a record by _id
router.delete("/:id", deleteAttention);

module.exports = router;
