const express = require("express");
const router = express.Router();
const SocratesProbController = require("../controllers/socratesProbController");

// Route to create a new record
router.post("/", SocratesProbController.createSocratesProb);
// Route to get all records
router.get("/", SocratesProbController.getAllSocratesProbs);
// Route to get a single record by ID
router.get("/:id", SocratesProbController.getSocratesProbById);
// Route to update a record by ID
router.put("/:id", SocratesProbController.updateSocratesProb);
// Route to delete a record by ID
router.delete("/:id", SocratesProbController.deleteSocratesProb);
// Route to get all SocratesProb by sessionId
router.get("/session/:sessionId", SocratesProbController.getSocratesProbBySessionId);


module.exports = router;
