const mongoose = require("mongoose");

// Task-Item Schema
const taskItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  subject: { type: String, required: true }, // Subject related to the task
  grade: { type: Number, required: true }, // Grade Level
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
    required: true,
  }, // Educator assigning the task
  dueDate: { type: Date, required: true },
  course: { type: String, required: true },
  type: { type: String, required: true },
  components: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskComponent" }], // Modular component references
  maximumMarks: { type: Number, required: true },
  marksScored: { type: Number, default: null },
  material: { type: String, default: null },
  status: { type: String, enum: ["Active", "Closed"], default: "Active" }, // Task Status
  tags: { type: [String], required: true },
});

// Task Schema (Unique Section ID)
const taskSchema = new mongoose.Schema({
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session" }, // Auto-generated Unique Object ID
  tasks: { type: [taskItemSchema], required: true }, // Array of Task Items
});

// Export
const Task = mongoose.model("TaskSchema", taskSchema);
module.exports = Task;

// JSON Format :
//
// {
//   "_id": "65d7b0e5f3a9c4d2e7b8f6a1",
//   "sessionId": "65d7b0e5f3a9c4d2e7b8f6a1",
//   "tasks": [
//     {
//       "title": "Math Homework",
//       "description": "Solve 10 algebra problems",
//       "dueDate": "2024-02-25T23:59:59.000Z",
//       "course": "Mathematics",
//       "type": "Homework",
//       "maximumMarks": 10,
//       "marksScored": null,
//       "material": null,
//       "tags": ["Algebra", "Equations"]
//     },
//     {
//       "title": "Science Lab Report",
//       "description": "Write a report on Newton's Laws",
//       "dueDate": "2024-02-28T23:59:59.000Z",
//       "course": "Science",
//       "type": "Lab Report",
//       "maximumMarks": 20,
//       "marksScored": 18,
//       "material": "https://example.com/newton-laws.pdf",
//       "tags": ["Physics", "Newton"]
//     }
//   ],
//   "__v": 0
// }
