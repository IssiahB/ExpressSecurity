require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const passport = require('passport');

const app = express();
const port = process.env.PORT | 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const session = require('express-session');
app.use(session({
    secret: process.env.BASE64_64BYTE_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes/main');
app.use('/', routes);

app.listen(port, function() {
    console.log('Server Started On Port ' + port);
});