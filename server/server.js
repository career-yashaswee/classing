require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const activityCollectionRoutes = require("./routes/activityRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const doubtRoutes = require("./routes/doubtRoutes");
const iVizRoutes = require("./routes/iVizRoutes");
const avatarRoutes = require("./routes/avatarRoutes");
const taskRoutes = require("./routes/taskRoutes");
const sclassRoutes = require("./routes/sclassRoutes");
const chatRoutes = require("./routes/chatRoutes");
const settingRoutes = require("./routes/settingRoutes");
const kanbanRoutes = require("./routes/kanbanRoutes");
const attentionRoutes = require("./routes/attentionRoutes");
const deckRoutes = require("./routes/deck");
const quizRoutes = require("./routes/quiz");
const deckFCRoutes = require("./routes/deckFCRoutes");
const flashCard = require("./routes/flashCardRoutes");
const socratesProb = require("./routes/socratesProbRoutes");
const interestCollection = require("./routes/interestCollectionRoutes");
const attentionAttemptRoutes = require("./routes/attentionAttemptRoutes");
const simulationRoutes = require("./routes/simulation");
const resourceRoutes = require("./routes/resource");
const nudgeRoutes = require("./routes/nudgeRoutes");
const doubtCollectionRoutes = require("./routes/doubtCollectionRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const engagementRoutes = require("./routes/engagementRoutes");
const badgeRoutes = require("./routes/badgeAwardRoutes");
const audiobookRoutes = require("./routes/audiobookRoutes");
const videoRoutes = require("./routes/videoRoutes");
const taskComponentRoutes = require("./routes/taskComponentsRoutes");
const taskSubmissionRoutes = require("./routes/taskSubmissionRoutes");

const app = express();

// CORS Middleware - CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: [
      process.env.ADMIN_URL,
      process.env.MOBILE_URL,
      process.env.EDUCATOR_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Access-Control-Allow-Origin"],
    credentials: true,
  })
);

app.use(express.json()); // Middleware for JSON parsing

// Ensure MONGODB_URI is set
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  console.error("Error: MONGODB_URI is not set in the environment variables.");
  process.exit(1); // Exit process if MongoDB URI is missing.
  // IF mongo DB is not Working.
}

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// --ROUTES--
app.use("/activity", activityCollectionRoutes);
app.use("/session", sessionRoutes);
app.use("/doubt", doubtRoutes);
app.use("/viz", iVizRoutes);
app.use("/avatar", avatarRoutes);
app.use("/task", taskRoutes);
app.use("/sclass", sclassRoutes);
app.use("/chat", chatRoutes);
app.use("/setting", settingRoutes);
app.use("/kanban", kanbanRoutes);
app.use("/attention", attentionRoutes);
app.use("/deckQuiz", deckRoutes);
app.use("/quiz", quizRoutes);
app.use("/deckFLashCard", deckFCRoutes);
app.use("/flashCard", flashCard);
app.use("/socratesProb", socratesProb);
app.use("/interestCollection", interestCollection);
app.use("/nudge", nudgeRoutes);
app.use("/simulation", simulationRoutes);
app.use("/resource", resourceRoutes);
app.use("/attentionAttempt", attentionAttemptRoutes);
app.use("/doubtcollection", doubtCollectionRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/engagement", engagementRoutes);
app.use("/badgeAward", badgeRoutes);
app.use("/audiobook", audiobookRoutes);
app.use("/video", videoRoutes);
app.use("/taskcomponent", taskComponentRoutes);
app.use("/tasksubmission", taskSubmissionRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Determine the correct server URL based on the environment
const URL =
  process.env.NODE_ENV === "production"
    ? process.env.SERVER_PRODUCTION_URL
    : process.env.SERVER_DEVELOPMENT_URL;

// Set PORT dynamically. (Mainly it will always be Active at port 3000).
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  // console.log(`CLIENT sending on ${process.env.CLIENT_URL}`);
  console.log(`SERVER listening on ${URL}:${PORT}`);
});

module.exports = app;
