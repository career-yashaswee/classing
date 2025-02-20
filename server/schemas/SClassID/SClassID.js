const mongoose = require("mongoose");

const schoolClassSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Unique class ID
  name: { type: String, required: true }, // Class name
//   location: { type: String, required: true } // Class location
});

// Export the Model
const SClass = mongoose.model("SchoolClass", schoolClassSchema);
module.exports = SClass;
