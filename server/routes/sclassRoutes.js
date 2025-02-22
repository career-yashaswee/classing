const express = require("express");
const router = express.Router();
const SClassController = require("../controllers/SClassController");

router.post("/", SClassController.createSchoolClass);

// Route to GET all School Classes
// router.get("/sclass", SClassController.getAllSchoolClasses);

// Route to GET a single School Class by ID
router.get("/:id", SClassController.getSchoolClassById);

// Route to UPDATE a School Class by ID
router.put("/:id", SClassController.updateSchoolClass);

// Route to DELETE a School Class by ID
router.delete("/:id", SClassController.deleteSchoolClass);

module.exports = router;
