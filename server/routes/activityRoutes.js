const express = require("express");
const router = express.Router();
// Importing Controllers.
const activityController = require("../controllers/activityController");

// CREATE Activity // Checked and Corrected.
router.post("/", activityController.createActivity);
// GET Activity by ObjectID //  Checked and Corrected.
router.get("/:objectID", activityController.getActivityById);
// UPDATE Activity by ObjectID // Checked and Corrected.
router.put("/:objectID", activityController.updateActivity);
// DELETE Activity by ObjectID // Checked and Corrected.
router.delete("/:objectID", activityController.deleteActivity);
// GET ALL Activities // Checked and Corrected.
router.get("/", activityController.getAllActivities);
module.exports = router;
