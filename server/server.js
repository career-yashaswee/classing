require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Required Files to be Imported.
const activityCollectionRoutes = require("./routes/activityRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const iVizRoutes = require("./routes/iVizRoutes");

const app = express();

// CORS Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
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
  process.exit(1); // Exit process if MongoDB URI is missing
}

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("\nConnected to MongoDB"))
  .catch((err) => {
    console.error("\nMongoDB connection error:", err);
    process.exit(1);
  });

// --ROUTES--
app.use("/activity", activityCollectionRoutes);
app.use("/session", sessionRoutes);
app.use("/interactiveVizualization", iVizRoutes);

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

// Set PORT dynamically
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  // console.log(`CLIENT sending on ${process.env.CLIENT_URL}`);
  console.log(`SERVER listening on ${URL}:${PORT}`);
});

module.exports = app;
