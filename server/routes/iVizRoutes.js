const express = require("express");
const router = express.Router();
const iVizController = require("../controllers/iVizController"); // Ensure the correct path
// Create a new visualization
router.post("/create", iVizController.createVisualization);
// Get a visualization by ID
router.get("/:id", iVizController.getVisualizationById);
// Update a visualization by ID
router.put("/:id", iVizController.updateVisualization);
// Delete a visualization by ID
router.delete('/:id', iVizController.deleteVisualization);
// Get a visualization
router.get('/', iVizController.getAllVisualizations);

module.exports = router; // Importing the Route.
