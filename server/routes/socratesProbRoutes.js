const express = require("express");
const router = express.Router();
const {
  createSocratesProb,
  getAllSocratesProbs,
  getSocratesProbById,
  getSocratesProbsBySessionID,
  updateSocratesProb,
  deleteSocratesProb,
} = require("../controllers/socratesProbController");

// Routes
router.post("/", createSocratesProb);
router.get("/", getAllSocratesProbs);
router.get("/:id", getSocratesProbById);
router.get("/session/:sessionID", getSocratesProbsBySessionID);
router.put("/:id", updateSocratesProb);
router.delete("/:id", deleteSocratesProb);

module.exports = router;
