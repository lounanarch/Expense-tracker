import express from "express";
import {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense
} from "../TransactionController.js";

const router = express.Router();

router.post("/", createExpense);        // Add
router.get("/", getExpenses);           // Get all
router.put("/:id", updateExpense);      // Edit
router.delete("/:id", deleteExpense);   // Delete

export default router;
