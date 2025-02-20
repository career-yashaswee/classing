const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: [200, "Length can't be more than 200"],
    },
    duration: {
      type: Number,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    SClass: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "SchoolClass",
      required: true,
    },
    topic_tags: {
      type: [String],
      required: true,
    },
    focus: {
      type: String,
      required: true,
      enum: ["example_intensive", "conceptual", "practical"],
    },
    session_start_time: {
      type: String,
      required: true,
      default: () =>
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
    session_start_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    inviteCode: {
      type: String,
      required: true,
      default: function () {
        return Math.random().toString(36).substring(2, 6).toUpperCase(); 
      },
      validate: {
        validator: function (v) {
          return /^[A-Za-z]{4}$/.test(v); // Ensures only 4 alphabetic characters
        },
        message: "Invite code must be exactly 4 alphabetic characters (A-Z, a-z)."
      }
    },
  },
  { timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
