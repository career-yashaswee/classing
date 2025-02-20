const mongoose = require("mongoose");

const DoubtSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  collectionId: { type: mongoose.Schema.Types.ObjectId, required: false },
  studentId: { type: String, required: true },
  doubtText: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  tags: { type: [String], required: true },
});

module.exports = mongoose.model("Doubt", DoubtSchema);
