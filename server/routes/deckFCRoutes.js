const express = require("express");
const router = express.Router();
const deckController = require("../controllers/deckFCController");

// Create a new deck
router.post("/decks/", deckController.createDeck);
// Get all decks
router.get("/decks/", deckController.getAllDecks);
// Get a single deck by ID
router.get("/decks/:id", deckController.getDeckById);
// Update a deck by ID
router.put("/decks/:id", deckController.updateDeck);
// Delete a deck by ID
router.delete("/decks/:id", deckController.deleteDeck);

// Export the Routes.s
module.exports = router;