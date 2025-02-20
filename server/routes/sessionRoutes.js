const express = require("express");
const router = express.Router();

// Importing Session Controller
const sessionController = require("../controllers/sessionController");
const SClassController = require("../controllers/SClassController");

// CREATE Session // Checked and Corrected
router.post("/", sessionController.createSession);
// GET Session by ObjectID // Checked and Corrected
router.get("/:objectID", sessionController.getSessionById);
// UPDATE Session by ObjectID // Checked and Corrected
router.put("/:objectID", sessionController.updateSession);
// DELETE Session by ObjectID // Checked and Corrected
router.delete("/:objectID", sessionController.deleteSession);
// GET ALL Sessions // Checked and Corrected
router.get("/", sessionController.getAllSessions);

// GET Avatar SClass.
router.post("/sclass", SClassController.createSchoolClass);
// Route to GET all School Classes
// router.get("/sclass", SClassController.getAllSchoolClasses);
// Route to GET a single School Class by ID
router.get("/sclass/:id", SClassController.getSchoolClassById);
// Route to UPDATE a School Class by ID
router.put("/sclass/:id", SClassController.updateSchoolClass);
// Route to DELETE a School Class by ID
router.delete("/sclass/:id", SClassController.deleteSchoolClass);

// Exports // Checked and Corrected
module.exports = router;
