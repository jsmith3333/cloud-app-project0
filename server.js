// Load environment variables
require("dotenv").config();

// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

// Create Express app
const app = express();

// Set EJS as templating engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: true
}));

// Define Task Schema
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    createdAt: { type: Date, default: Date.now }
});
const Task = mongoose.model("Task", taskSchema);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log("Database connection error:", err));

// Route for homepage - Now queries the database
app.get("/", async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.render("index", { tasks: tasks });
    } catch (err) {
        console.error("Error fetching tasks:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
