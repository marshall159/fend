var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
const PORT = process.env.PORT || 8082;
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.post('/aylien', function (req, res) {
    const { url } = req.body;

    textapi.summarize({
        url
    }, (error, response) => {
        if (error === null) {
            return res.send(response);
        } else {
            return res.send(error);
        }
    });
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
