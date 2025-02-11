// Import Model of the Activity.
const Activity = require("../database/activityCollectionSchema/activityCollectionSchema");
const mongoose = require("mongoose");

// CREATE Activity
exports.createActivity = async (req, res) => {
  try {
    const newActivity = new Activity(req.body);
    const savedActivity = await newActivity.save();
    res.status(201).json({ message: "Activity Created", data: savedActivity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET Activity by ObjectID (params.objectID)
exports.getActivityById = async (req, res) => {
  try {
    const { objectID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(objectID)) {
      return res.status(400).json({ error: "Invalid ObjectID" });
    }

    const activity = await Activity.findById(objectID);
    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE Activity by ObjectID
exports.updateActivity = async (req, res) => {
  try {
    const { objectID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(objectID)) {
      return res.status(400).json({ error: "Invalid ObjectID" });
    }

    const updatedActivity = await Activity.findByIdAndUpdate(objectID, req.body, { new: true, runValidators: true });
    if (!updatedActivity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.status(200).json({ message: "Activity Updated", data: updatedActivity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE Activity by ObjectID
exports.deleteActivity = async (req, res) => {
  try {
    const { objectID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(objectID)) {
      return res.status(400).json({ error: "Invalid ObjectID" });
    }

    const deletedActivity = await Activity.findByIdAndDelete(objectID);
    if (!deletedActivity) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.status(200).json({ message: "Activity Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET ALL Activities (Optional)
exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
