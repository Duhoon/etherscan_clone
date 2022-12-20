const express = require("express");
const router = express.Router();

const {accountsController} = require("../controller");

router.get("/balance", accountsController.getBalanceOf);

module.exports = router;