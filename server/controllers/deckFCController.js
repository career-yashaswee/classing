const Deck = require("../schemas/flashCardSchema/deckFC");

// Create a new Deck
exports.createDeck = async (req, res) => {
  try {
    const deck = new Deck(req.body);
    await deck.save();
    res.status(201).json(deck);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Decks
exports.getAllDecks = async (req, res) => {
  try {
    const decks = await Deck.find().populate("flashCards");
    res.status(200).json(decks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Deck by ID
exports.getDeckById = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id).populate("flashCards");
    if (!deck) {
      return res.status(404).json({ message: "Deck not found" });
    }
    res.status(200).json(deck);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Deck by ID
exports.updateDeck = async (req, res) => {
  try {
    req.body.updatedAt = Date.now(); // Update timestamp
    const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!deck) {
      return res.status(404).json({ message: "Deck not found" });
    }
    res.status(200).json(deck);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Deck by ID
exports.deleteDeck = async (req, res) => {
  try {
    const deck = await Deck.findByIdAndDelete(req.params.id);
    if (!deck) {
      return res.status(404).json({ message: "Deck not found" });
    }
    res.status(200).json({ message: "Deck deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};