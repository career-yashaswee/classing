const express = require("express");
const router = express.Router();
const interestCollectionController = require("../controllers/interestCollectionController");

// Create a new Interest Collection
router.post("/", interestCollectionController.createInterestCollection);
// Get all Interest Collections
router.get("/", interestCollectionController.getAllInterestCollections);
// Get a single Interest Collection by ID
router.get("/:id", interestCollectionController.getInterestCollectionById);
// Update an Interest Collection
router.put("/:id", interestCollectionController.updateInterestCollection);
// Delete an Interest Collection
router.delete("/:id", interestCollectionController.deleteInterestCollection);

module.exports = router;
