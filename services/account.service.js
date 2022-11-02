require("dotenv").config();
const Utils = require("../utils/index");
const { Spot } = require("@binance/connector");
const AccountService = {
    getAccount: async function () {
        try {
            return await Utils.client()
                .account()
                .then((response) => response.data);
        } catch (error) {
            throw error.message;
        }
    }
};
module.exports = AccountService;
