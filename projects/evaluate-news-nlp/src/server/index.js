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
const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});

app.get('/test', function (req, res) {
    textapi.sentiment({
        'text': 'John is a very good football player!'
    }, (error, response) => {
        if (error === null) {
            console.log(response);
            res.send(response);
        } else {
            res.send(error);
        }
    });

});
