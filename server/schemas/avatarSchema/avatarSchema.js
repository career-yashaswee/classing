const mongoose = require("mongoose");

// Avatar Conversation Schema.
const conversationSchema = new mongoose.Schema({
  messageId: { type: String, required: true },
  sender: { type: String, enum: ["USER", "Avatar"], required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, required: true },
  metadata: {
    emotion: { type: String, enum: ["neutral", "happy", "sad", "angry"], required: true },
    inputMode: { type: String, enum: ["text", "voice"], required: false },
    voiceTone: { type: String, required: false },
    gesture: { type: String, required: false }
  }
});

const avatarSessionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  sessionId: { type: String, required: true },
  conversation: { type: [conversationSchema], required: true }
});

// Export the Model
const AvatarSession = mongoose.model("AvatarSession", avatarSessionSchema);
module.exports = AvatarSession;
