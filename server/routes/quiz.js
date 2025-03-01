// routes/quiz.routes.js
const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz");

router.post("/", quizController.createQuiz);
router.get("/deck/:deckId", quizController.getQuizzesByDeck);
router.get("/:id", quizController.getQuizById);
router.put("/:id", quizController.updateQuiz);
router.delete("/:id", quizController.deleteQuiz);

module.exports = router;
