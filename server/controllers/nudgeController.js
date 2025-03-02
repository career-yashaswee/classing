const mongoose = require("mongoose");
const Nudge = require("../schemas/nudge/nudgeSchema");

// Create a new Nudge
exports.createNudge = async (req, res) => {
  try {
    const nudge = new Nudge(req.body);
    await nudge.save();
    res.status(201).json(nudge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all Nudges
exports.getAllNudges = async (req, res) => {
  try {
    const nudges = await Nudge.find();
    res.status(200).json(nudges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read a single Nudge by ID
exports.getNudgeById = async (req, res) => {
  try {
    const nudge = await Nudge.findById(req.params.id);
    if (!nudge) return res.status(404).json({ message: "Nudge not found" });
    res.status(200).json(nudge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Nudge
exports.updateNudge = async (req, res) => {
  try {
    const nudge = await Nudge.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!nudge) return res.status(404).json({ message: "Nudge not found" });
    res.status(200).json(nudge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Nudge
exports.deleteNudge = async (req, res) => {
  try {
    const nudge = await Nudge.findByIdAndDelete(req.params.id);
    if (!nudge) return res.status(404).json({ message: "Nudge not found" });
    res.status(200).json({ message: "Nudge deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
