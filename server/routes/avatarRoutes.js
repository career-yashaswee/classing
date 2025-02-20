const express = require("express");
const router = express.Router();
const avatarController = require("../controllers/avatarController");

router.post("/", avatarController.createAvatarSession); // Create session
router.get("/", avatarController.getAllAvatarSessions); // Get all sessions
router.get("/:id", avatarController.getAvatarSessionById); // Get session by ID
router.put("/:id", avatarController.updateAvatarSession); // Update session
router.delete("/:id", avatarController.deleteAvatarSession); // Delete session
router.post("/:id/message", avatarController.addMessageToSession); // Add message

module.exports = router;
