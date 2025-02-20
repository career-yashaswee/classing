const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController"); // Adjust the path as needed

router.post("/tasks", taskController.createTask); // Create the Post.
router.get("/tasks", taskController.getAllTasks); // Collect the Post.
router.get("/tasks/:id", taskController.getTaskById); // Get task by ID.
router.put("/tasks/:id", taskController.updateTask); // Update the Task by ID.
router.delete("/tasks/:id", taskController.deleteTask); // Delete the Task.

module.exports = router;
