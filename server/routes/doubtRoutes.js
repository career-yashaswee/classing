const express = require("express");
const router = express.Router();
const {
  addDoubt,
  getDoubtsBySessionId,
} = require("../controllers/doubtController");
// Route to add a new doubt
router.post("/add", addDoubt);

// Route to get all doubts for a session
router.get("/:sessionId", getDoubtsBySessionId);

module.exports = router;
