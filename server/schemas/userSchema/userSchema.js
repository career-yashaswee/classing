const mongoose = require("mongoose");
// Give the userSchema.
const UserSchema = new mongoose.Schema({
  // Name of Student/Teacher.
  name: {
    type: String,
    required: [true, "User name is required"],
    trim: true
  },
  role: {
    type: String,
    enum: ["Student", "Teacher", "Admin", "System"],
    required: [true, "User role is required"]
  },
  contact: {
    type: String,
    match: [/^\+?\d{10,15}$/, "Invalid contact number"],
    required: false // Optional field
  },
  mailID: {
    type: String,
    required: [true, "Email required"],
    unique: true, // Ensures no duplicate emails
    lowercase: true, // Converts email to lowercase
    trim: true, // Removes spaces before/after
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid email Format."
    },
  },
}, { timestamps: true });

module.exports.UserSchema = mongoose.model("UserSchema", UserSchema);
