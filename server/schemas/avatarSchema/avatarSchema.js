const mongoose = require("mongoose");

// Avatar Conversation Schema.
const conversationSchema = new mongoose.Schema({
  messageId: { type: String, required: true },
  sender: { type: String, enum: ["USER", "Avatar", "Teacher"], required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

// Avatar Schema.
const avatarSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, auto: true },
  sessionId: { type: String, required: true },
  conversation: { type: [conversationSchema], required: true }
});

// Export the Model
const AvatarSession = mongoose.model("AvatarSession", avatarSessionSchema);
module.exports = AvatarSession;
