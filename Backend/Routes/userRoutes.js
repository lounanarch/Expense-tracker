import express from "express";

const router = express.Router();

// Example route: get all users
router.get("/", (req, res) => {
  res.json({ message: "Get all users" });
});

// Example route: create a new user
router.post("/", (req, res) => {
  const { name, email } = req.body;
  // Normally, you would save user to DB here
  res.json({ message: "User created", user: { name, email } });
});

export default router; // ✅ userRoutes is exported here

