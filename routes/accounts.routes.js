const Utils = require("../utils");
const express = require("express");
const router = express.Router();
const AccountService = require("../services/account.service");

router.get("/", async function (req, res) {
    return Utils.respond(req, res, AccountService.getAccount);
});

module.exports = {
    path: "account",
    router
};
