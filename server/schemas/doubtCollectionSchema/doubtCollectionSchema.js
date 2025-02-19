const mongoose = require("mongoose");
// const doubtItem = require("./doubtCollectionItemSchema").schema;

// MAIN : 
const doubtCollectionSchema = new mongoose.Schema({
  tackled: {type: Number, required: true, default: 0},
  doubts: [{ type: mongoose.Schema.Types.ObjectId, ref: "DoubtCollectionItem", required: true }] // Array of references to Doubt schema
});

// Return the Export Schema.
const DoubtCollection = mongoose.model("DoubtCollection", doubtCollectionSchema);
module.exports = DoubtCollection;

// CHECK STEP : 
//
// Define DoubtCollectionItem Schema (Embedded Schema)
// const doubtCollectionItemSchema = new mongoose.Schema({
//   summary: { type: String, required: true }, 
//   category: { type: [String], enum: ["Theoretical", "Conceptual"], required: true }, 
//   count: { type: Number, required: true }, 
//   complexity: { type: Number, min: 1, max: 10, required: true }, 
//   timeArrived: { type: Date, required: true, default: Date.now }, 
//   isAiSummarized: { type: Boolean, default: false }, 
//   aiRating: { 
//     type: String, 
//     enum: ["Most Asked", "Common", "Rare"], 
//     required: true 
//   }, 
//   originalDoubts: { type: [String], required: true } 
// });

// // Define DoubtCollection Schema (Embedding doubtCollectionItemSchema)
// const doubtCollectionSchema = new mongoose.Schema({
//   tackled: { type: Number, required: true, default: 0 },
//   doubts: [doubtCollectionItemSchema]  // Embedding instead of ObjectId reference
// });

// // Export the model
// const DoubtCollection = mongoose.model("DoubtCollection", doubtCollectionSchema);
// module.exports = DoubtCollection;

