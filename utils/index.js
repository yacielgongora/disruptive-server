require("dotenv").config();
const { Spot } = require("@binance/connector");
const Utils = {
    respond: async function (req, res, fn) {
        try {
            var parameters;
            if (req.method === "POST") {
                parameters = req.body;
            } else {
                parameters = req.query;
            }
            parameters = {
                ...parameters,
                ...req.params
            };
            var response = await fn(parameters);
            return res.status(200).send(response);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).send("Something went wrong");
            } else {
                return res.status(400).send(error);
            }
        }
    },
    client: function (api_key, secret_key) {
        return new Spot(api_key, secret_key, { baseURL: process.env.BINANCE_URL });
    }
};
module.exports = Utils;
