const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // enable CORS
app.use(express.json()); // read JSON data

// Temporary storage (array)
let expenses = [];

/*
========================
1. ADD EXPENSE (POST)
========================
*/
app.post("/add-expense", (req, res) => {
    const { amount, category } = req.body;

    // validation
    if (!amount || !category) {
        return res.status(400).json({ message: "Amount and category required" });
    }

    const newExpense = {
        id: Date.now(),
        amount: Number(amount),
        category: category
    };

    expenses.push(newExpense);

    res.json({
        message: "Expense added successfully",
        expense: newExpense
    });
});

/*
========================
2. GET ALL EXPENSES
========================
*/
app.get("/expenses", (req, res) => {
    res.json(expenses);
});

/*
========================
3. GET TOTAL EXPENSE
========================
*/
app.get("/total", (req, res) => {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    res.json({ total: total });
});

/*
========================
SERVER START
========================
*/
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});