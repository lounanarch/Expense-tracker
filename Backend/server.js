// Backend/server.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./Config/db.js";


import expenseRoutes from './Routes/expenseRoutes.js';
import userRoutes from "./Routes/userRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test route to check if server is running
app.get("/", (req, res) => {
  res.send("API is running");
});

// Mount your routes
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});


    