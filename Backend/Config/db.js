import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    // 👇 shows MongoDB queries in terminal
    mongoose.set("debug", true);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected successfully");

    mongoose.connection.on("connected", () => {
      console.log("🟢 Mongoose connected to database");
    });

    mongoose.connection.on("error", (err) => {
      console.error("🔴 Mongoose connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("🟡 Mongoose disconnected");
    });

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};


