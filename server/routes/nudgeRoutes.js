const express = require("express");
const router = express.Router();
const nudgeController = require("../controllers/nudgeController");

// Create a new Nudge
router.post("/", nudgeController.createNudge);
// Get all Nudges
router.get("/", nudgeController.getAllNudges);
// Get a single Nudge by ID
router.get("/:id", nudgeController.getNudgeById);
// Update a Nudge by ID
router.put("/:id", nudgeController.updateNudge);
// Delete a Nudge by ID
router.delete("/:id", nudgeController.deleteNudge);
module.exports = router;
