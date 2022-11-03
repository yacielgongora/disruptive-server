require("dotenv").config();
const Utils = require("../utils/index");
const axios = require("axios");
const AccountService = {
    getAccount: async function ({ api_key, secret_key }) {
        try {
            return await Utils.client(api_key, secret_key)
                .account()
                .then((response) => response.data);
        } catch (error) {
            throw error.message;
        }
        // try {
        //     const { data } = await AccountService.account(api_key, secret_key);
        //     return data;
        // } catch (error) {
        //     throw error.response?.data || error.message;
        // }
    }
};
module.exports = AccountService;
