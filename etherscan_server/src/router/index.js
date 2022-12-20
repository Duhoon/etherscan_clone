const express = require("express");
const router = express.Router();

const accountsRouter = require("./accounts.js");
const contractsRouter = require("./contracts.js");
const transactionsRouter = require("./transactions.js");

router.use("/accounts", accountsRouter);
router.use("/contracts", contractsRouter);
router.use("/transactions", transactionsRouter)