const express = require("express");
const {
  createExpCtrl,
  fetchAllExpCtrl,
  fetchOneExpCtrl,
  updateExpCtrl,
  deleteExpCtrl,
} = require("../../controllers/expenses/expensesCtrl");
const authMiddleware = require("../../middlewares/authMiddleware");
const expensesRoute = express.Router();

expensesRoute.post("/", authMiddleware, createExpCtrl);
expensesRoute.get("/", authMiddleware, fetchAllExpCtrl);
expensesRoute.get("/:id", authMiddleware, fetchOneExpCtrl);
expensesRoute.put("/:id", authMiddleware, updateExpCtrl);
expensesRoute.delete("/:id", authMiddleware, deleteExpCtrl);

module.exports = expensesRoute;
