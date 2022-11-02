'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

fs.readdir('./routes', function (error, files) {
    files.forEach(function (file) {
        app.use(`/${require('./routes/' + file).path}`, require('./routes/' + file).router);
    });
});

var server = require('http').createServer(app);
server.listen(process.env.PORT, async function () {
    console.log(`Server started at ${process.env.SERVER_URL}:${process.env.PORT}`);
});
