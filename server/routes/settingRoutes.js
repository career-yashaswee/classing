const express = require("express");
const { saveSettings, getSettings, deleteSettings } = require("../controllers/settingController");

const router = express.Router();
router.post("/", saveSettings); // Create or update settings
router.get("/:userID", getSettings); // Get settings by userID
router.delete("/:userID", deleteSettings); // Delete settings by userID

module.exports = router;
