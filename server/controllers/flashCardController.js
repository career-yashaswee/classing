const FlashCard = require("../schemas/flashCardSchema/flashCard");

// Create a new FlashCard
exports.createFlashCard = async (req, res) => {
  try {
    const flashCard = new FlashCard(req.body);
    await flashCard.save();
    res.status(201).json(flashCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all FlashCards
exports.getAllFlashCards = async (req, res) => {
  try {
    const flashCards = await FlashCard.find();
    res.status(200).json(flashCards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single FlashCard by ID
exports.getFlashCardById = async (req, res) => {
  try {
    const flashCard = await FlashCard.findById(req.params.id);
    if (!flashCard) {
      return res.status(404).json({ message: "FlashCard not found" });
    }
    res.status(200).json(flashCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a FlashCard by ID
exports.updateFlashCard = async (req, res) => {
  try {
    req.body.updatedAt = Date.now(); // Update the timestamp
    const flashCard = await FlashCard.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!flashCard) {
      return res.status(404).json({ message: "FlashCard not found" });
    }
    res.status(200).json(flashCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a FlashCard by ID
exports.deleteFlashCard = async (req, res) => {
  try {
    const flashCard = await FlashCard.findByIdAndDelete(req.params.id);
    if (!flashCard) {
      return res.status(404).json({ message: "FlashCard not found" });
    }
    res.status(200).json({ message: "FlashCard deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
