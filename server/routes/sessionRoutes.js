const express = require("express");
const router = express.Router();

// Importing Session Controller
const sessionController = require("../controllers/sessionController");

// CREATE Session // Checked and Corrected
router.post("/", sessionController.createSession);
// GET Session by ObjectID // Checked and Corrected
router.get("/:objectID", sessionController.getSessionById);

router.get("/:objectID/join", sessionController.getSessionById);
// UPDATE Session by ObjectID // Checked and Corrected
router.put("/:objectID", sessionController.updateSession);
// DELETE Session by ObjectID // Checked and Corrected
router.delete("/:objectID", sessionController.deleteSession);
// GET ALL Sessions // Checked and Corrected
router.get("/", sessionController.getAllSessions);
// GET Session by SClass ID
router.get("/sclass/:sclassId", sessionController.getSessionBySClassId);
// Exports // Checked and Corrected
module.exports = router;
