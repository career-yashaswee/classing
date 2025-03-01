const express = require("express");
const router = express.Router();
const flashCardController = require("../controllers/flashCardController");

// Create a new flashcard
router.post("/flashcards", flashCardController.createFlashCard);
// Get all flashcards
router.get("/flashcards", flashCardController.getAllFlashCards);
// Get a single flashcard by ID
router.get("/flashcards/:id", flashCardController.getFlashCardById);
// Update a flashcard by ID
router.put("/flashcards/:id", flashCardController.updateFlashCard);
// Delete a flashcard by ID
router.delete("/flashcards/:id", flashCardController.deleteFlashCard);

module.exports = router;