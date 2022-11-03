"use strict";

require("dotenv").config();
const request = require("request");
const chai = require("chai");
const Utils = require("../utils");
const expect = chai.expect;

before(async function () {
    console.log("Starting tests");
    process.env.NODE_ENV = "testing";
    console.log("TEST", "Starting up server");
    require("../index");
});

describe("Server service", function () {
    it("Server running", function (done) {
        request.get(
            {
                url: process.env.SERVER_URL
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            }
        );
    });
});

describe("Coins service", function () {
    it("Obtain 10 coins that had the most value losses in the last 24h DESC", function (done) {
        request.get(
            {
                url: `${process.env.SERVER_URL}/coins`
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            }
        );
    });
    it("Create a order type LIMIT", function (done) {
        request.post(
            {
                url: `${process.env.SERVER_URL}/coins/order`,
                json: {
                    side: "BUY",
                    type: "LIMIT",
                    timeInForce: "GTC",
                    quantity: 1000
                }
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            }
        );
    });
});

describe("Account service", function () {
    it("Get account information", function (done) {
        request.get(
            {
                url: `${process.env.SERVER_URL}/account?api_key=${process.env.API_KEY}&secret_key=${process.env.SECRET_KEY}`
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            }
        );
    });
});
