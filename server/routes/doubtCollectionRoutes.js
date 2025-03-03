const express = require("express");
const router = express.Router();
const doubtCollectionController = require("../controllers/doubtCollectionController");

router.post("/create", doubtCollectionController.createDoubtCollection);
// router.get("/", doubtCollectionController.getAllDoubtCollections);
router.get("/:id", doubtCollectionController.getDoubtCollectionById);
router.put("/:id", doubtCollectionController.updateDoubtCollection);
router.delete("/:id", doubtCollectionController.deleteDoubtCollection);
router.get("/session/:sessionID", doubtCollectionController.getAllDoubtCollectionsBySessionID);

module.exports = router;
