const mongoose = require("mongoose");

// User Schema (For both Teachers and Students)
const userSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "UserSchema"},
});

// Chat Room Schema (One-to-One or Group Chat)
const chatRoomSchema = new mongoose.Schema({
  isGroupChat: { type: Boolean, default: false },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }], // Users in the chat
  groupName: { type: String, default: null }, // Only for group chats
  groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }, // Only for group chats
  createdAt: { type: Date, default: Date.now }
});

// Message Schema (Chat Messages)
const messageSchema = new mongoose.Schema({
  chatRoom: { type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom", required: true }, // Which chat it belongs to
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Message sender
  messageType: { type: String, enum: ["text", "image", "file"], default: "text" }, // Message Type
  content: { type: String, required: true }, // Message Content
  fileUrl: { type: String, default: null }, // For images/files
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Exporting Models
const User = mongoose.model("User", userSchema);
const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
const Message = mongoose.model("Message", messageSchema);

module.exports = { User, ChatRoom, Message };
