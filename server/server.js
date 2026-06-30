const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database Connection
//require("./database");
require("./config/database");

// Routes
const teamRoutes = require("./routes/teams");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/teams", teamRoutes);

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to CricManager API 🚀"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});