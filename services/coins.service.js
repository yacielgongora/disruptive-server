require("dotenv").config();
const Utils = require("../utils/index");
const axios = require("axios");
const { Spot } = require("@binance/connector");
const CoinsService = {
    getCoins: async function () {
        try {
            return await Utils.client()
                .ticker24hr()
                .then((response) =>
                    response.data
                        .sort(function (a, b) {
                            return a.priceChangePercent - b.priceChangePercent;
                        })
                        .slice(0, 10)
                );
        } catch (error) {
            throw error.message;
        }
    },
    createOrder: async function ({ side, type, timeInForce, quantity }) {
        const coin = (await CoinsService.getCoins())[0];
        try {
            return await Utils.client(process.env.API_KEY, process.env.SECRET_KEY)
                .newOrder(coin.symbol, "BUY", "LIMIT", {
                    price: coin.openPrice,
                    quantity,
                    timeInForce
                })
                .then((response) => response.data);
        } catch (error) {
            throw error.message;
        }
    },
    order: function (params) {
        return axios({
            method: "POST",
            url: `${process.env.BINANCE_URL}/api/v3/order`,
            params: Utils.signPayload(params),
            headers: { "X-MBX-APIKEY": process.env.API_KEY }
        });
    },
    coins: function () {
        return axios({
            method: "GET",
            url: `${process.env.BINANCE_URL}/api/v3/ticker/24hr`
        });
    }
};
module.exports = CoinsService;
