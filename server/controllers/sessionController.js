// Import Model of the Session.
const Session = require("../schemas/sessionSchema/sessionSchema");
const mongoose = require("mongoose");

// CREATE Session
const createSession = async (req, res) => {
  try {
    const newSession = new Session(req.body);
    const savedSession = await newSession.save();
    res.status(201).json({ message: "Session Created", data: savedSession });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET Session by ObjectID
const getSessionById = async (req, res) => {
  try {
    const { objectID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(objectID)) {
      return res.status(400).json({ error: "Invalid ObjectID" });
    }

    const session = await Session.findById(objectID);
    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE Session by ObjectID
const updateSession = async (req, res) => {
  try {
    const { objectID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(objectID)) {
      return res.status(400).json({ error: "Invalid ObjectID" });
    }

    const updatedSession = await Session.findByIdAndUpdate(objectID, req.body, { new: true, runValidators: true });
    if (!updatedSession) {
      return res.status(404).json({ error: "Session not found" });
    }

    res.status(200).json({ message: "Session Updated", data: updatedSession });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE Session by ObjectID
const deleteSession = async (req, res) => {
  try {
    const { objectID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(objectID)) {
      return res.status(400).json({ error: "Invalid ObjectID" });
    }

    const deletedSession = await Session.findByIdAndDelete(objectID);
    if (!deletedSession) {
      return res.status(404).json({ error: "Session not found" });
    }

    res.status(200).json({ message: "Session Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET ALL Sessions
const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Export all the Session.
module.exports = { createSession, getSessionById, updateSession, deleteSession, getAllSessions };