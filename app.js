const express = require('express');
const ejs = require('ejs');
require('dotenv').config();
const routes = require('./routes/main');

const app = express();
const port = process.env.PORT | 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

app.listen(port, function() {
    console.log('Server Started On Port ' + port);
});