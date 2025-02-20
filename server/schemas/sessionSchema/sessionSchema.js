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
    class: {
      type: String,
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
  },
  { timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
