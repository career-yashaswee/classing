const express = require("express");
const router = express.Router();
const kanbanController = require("../controllers/kanbanController");

// Define CRUD routes
    router.post("/tasks", kanbanController.createTask);        // Create
    router.get("/tasks", kanbanController.getAllTasks);        // Read all
    router.get("/tasks/:id", kanbanController.getTaskById);    // Read one
    router.put("/tasks/:id", kanbanController.updateTask);     // Update
    router.delete("/tasks/:id", kanbanController.deleteTask);  // Delete

module.exports = router;
