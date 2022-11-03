const Utils = require("../utils");
const express = require("express");
const router = express.Router();
const CoinsService = require("../services/coins.service");

router.get("/", async function (req, res) {
    console.log(req.body);
    return Utils.respond(req, res, CoinsService.getCoins);
});
router.post("/order", async function (req, res) {
    return Utils.respond(req, res, CoinsService.createOrder);
});

module.exports = {
    path: "coins",
    router
};
