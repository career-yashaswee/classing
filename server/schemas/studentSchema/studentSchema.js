const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    guardian: {
      permanentAddress: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      },
      contactNumber: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{10}$/, "Invalid contact number"],
      },
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    school: {
      type: String,
      required: true,
      trim: true,
    },
    admissionNumber: {
      type: String,
      unique: true,
      sparse: true, // Allows null values but maintains uniqueness
    },
    SClass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SchoolClass",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("studentSchema", studentSchema);
