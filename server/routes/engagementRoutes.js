const express = require("express");
const router = express.Router();
const engagementController = require("../controllers/engagementController"); // Importing the controller

// Create a new engagement
router.post("/", engagementController.createEngagement);
// Get all engagements
router.get("/", engagementController.getAllEngagements);
// Get a single engagement by ID
router.get("/:id", engagementController.getEngagementById);
// Update an engagement by ID
router.put("/:id", engagementController.updateEngagement);
// Delete an engagement by ID
router.delete("/:id", engagementController.deleteEngagement);

module.exports = router;
