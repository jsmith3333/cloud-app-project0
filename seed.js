require("dotenv").config();
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", taskSchema);

const seedTasks = [
    { title: "Project Audit", description: "Review report and code discrepancies", completed: true },
    { title: "Code Fixes", description: "Standardize environment variables and fix server logic", completed: false },
    { title: "Database Seeding", description: "Implement seed script for MongoDB Atlas", completed: false },
    { title: "Final Submission", description: "Package and deliver corrected files", completed: false }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for seeding...");
        
        await Task.deleteMany({});
        console.log("Cleared existing tasks.");
        
        await Task.insertMany(seedTasks);
        console.log("Database seeded with sample tasks.");
        
        mongoose.connection.close();
    } catch (err) {
        console.error("Seeding error:", err);
        process.exit(1);
    }
}

seedDB();
