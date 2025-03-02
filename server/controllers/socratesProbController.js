const SocratesProb = require("../schemas/socratesProbSchema/socratesProbSchema");

// Create a new record
exports.createSocratesProb = async (req, res) => {
  try {
    const newProb = new SocratesProb(req.body);
    const savedProb = await newProb.save();
    res.status(201).json(savedProb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all records
exports.getAllSocratesProbs = async (req, res) => {
  try {
    const probs = await SocratesProb.find();
    res.status(200).json(probs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single record by ID
exports.getSocratesProbById = async (req, res) => {
  try {
    const prob = await SocratesProb.findById(req.params.id);
    if (!prob) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(prob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a record by ID
exports.updateSocratesProb = async (req, res) => {
  try {
    const updatedProb = await SocratesProb.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProb) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(updatedProb);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a record by ID
exports.deleteSocratesProb = async (req, res) => {
  try {
    const deletedProb = await SocratesProb.findByIdAndDelete(req.params.id);
    if (!deletedProb) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
