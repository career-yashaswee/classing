// routes/deck.routes.js
const express = require("express");
const router = express.Router();
const deckController = require("../controllers/deck");

router.post("/", deckController.createDeck);
router.get("/", deckController.getAllDecks);
router.get("/:id", deckController.getDeckById);
router.put("/:id", deckController.updateDeck);
router.delete("/:id", deckController.deleteDeck);

module.exports = router;
