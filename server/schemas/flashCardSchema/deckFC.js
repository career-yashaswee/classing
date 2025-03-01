const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  coverImage: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  flashCards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FlashCard", // Linking deck to multiple flashcards
    },
  ],
  difficultyLevel: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  topics: [
    {
      type: String,
      trim: true,
    },
  ],
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Deck = mongoose.model("deckFC", deckSchema);
module.exports = Deck;
