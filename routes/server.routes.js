const Utils = require("../utils");
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
    return res.status(200).send("Disruptive server");
});

module.exports = {
    path: "",
    router
};
