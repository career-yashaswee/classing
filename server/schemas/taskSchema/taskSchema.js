const mongoose = require("mongoose");

// Task-Item Schema
const taskItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  course: { type: String, required: true },
  type: { type: String, required: true },
  maximumMarks: { type: Number, required: true },
  marksScored: { type: Number, default: null },
  material: { type: String, default: null },
  tags: { type: [String], required: true }
});

// Task Schema (Unique Section ID)
const taskSchema = new mongoose.Schema({
  sessionId: { type: mongoose.Schema.Types.ObjectId, auto: true, unique: true }, // Auto-generated Unique Object ID
  tasks: { type: [taskItemSchema], required: true } // Array of Task Items
});

// Export
const Task = mongoose.model("TaskSchema", taskSchema);
module.exports = Task;
