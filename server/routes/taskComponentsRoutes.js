const express = require("express");
const router = express.Router();
const taskComponentController = require("../controllers/taskComponentController");

// Route to create a new Task Component
router.post("/", taskComponentController.createTaskComponent);
// Route to get all Task Components
router.get("/", taskComponentController.getAllTaskComponents);
// Route to get a single Task Component by ID
router.get("/:id", taskComponentController.getTaskComponentById);
// Route to update a Task Component by ID
router.put("/:id", taskComponentController.updateTaskComponent);    
// Route to delete a Task Component by ID
router.delete("/:id", taskComponentController.deleteTaskComponent);

module.exports = router;