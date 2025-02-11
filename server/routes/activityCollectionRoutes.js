const express = require("express");
const router = express.Router();
// Importing Controllers.
const activityController = require("../controllers/activityCollectionController");

// CREATE Activity
router.post("/activity", activityController.createActivity);

// GET Activity by ObjectID
router.get("/activity/:objectID", activityController.getActivityById);

// UPDATE Activity by ObjectID
router.put("/activity/:objectID", activityController.updateActivity);

// DELETE Activity by ObjectID
router.delete("/activity/:objectID", activityController.deleteActivity);

// GET ALL Activities
router.get("/activities", activityController.getAllActivities);

module.exports = router;
