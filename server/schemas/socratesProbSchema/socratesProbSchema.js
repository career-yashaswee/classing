const mongoose = require("mongoose");

const SocratesProbSchema = new mongoose.Schema(
  {
    asset: {
      type: String,
      required: true,
    },
    learningObjective: {
      type: String,
      required: true,
    },
    complexity: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    returnType: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    sessionID: {
      type: String,
      required: true,
    },
    assistMode: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SocratesProb", SocratesProbSchema);
