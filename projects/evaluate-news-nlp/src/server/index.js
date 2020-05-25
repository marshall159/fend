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

// console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile('dist/index.html');

});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});

app.post('/aylien', function (req, res) {
    console.log('req :>> ', req.body);
    // const { text } = req.body;

    // textapi.sentiment({
    //     text
    // }, (error, response) => {
    //     if (error === null) {
    //         console.log(response);
    //         res.send(response);
    //     } else {
    //         res.send(error);
    //     }
    // });

    // console.log('text :>> ', text);

    res.json('hello from aylien route');
});
