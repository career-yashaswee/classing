const express = require("express");
const router = express.Router();
// Importing Controllers.
const activityController = require("../controllers/activityController");

// CREATE Activity // Checked and Corrected.
router.post("/activity", activityController.createActivity);
// GET Activity by ObjectID //  Checked and Corrected.
router.get("/activity/:objectID", activityController.getActivityById);
// UPDATE Activity by ObjectID // Checked and Corrected.
router.put("/activity/:objectID", activityController.updateActivity);
// DELETE Activity by ObjectID // Checked and Corrected.
router.delete("/activity/:objectID", activityController.deleteActivity);
// GET ALL Activities // Checked and Corrected.
router.get("/activity", activityController.getAllActivities);
module.exports = router;
