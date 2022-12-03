const db = require('../models/project_models');
const passport = require('passport');
// const bcrypt = require('bcrypt');       // Using passport instead
// const saltRounds = 10;

const secrets = function(req, res) {
    if (req.isAuthenticated()) {
        res.render('secrets');
    } else {
        res.redirect('login');
    }
}

const loginUser = function(req, res) {
    const user = new db.User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err) {
        if (err) {
            console.log(err);
            res.redirect('login');
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/secrets');
            });
        }
    });
}

const logoutUser = function(req, res) {
    req.logout(false, function(err) {
        if (err)
            console.log(err);

        res.redirect('/');
    });
}

const registerUser = async function(req, res) {
    db.User.register({username: req.body.username}, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/secrets');
            });
        }
    });
}

module.exports = {
    loginUser,
    registerUser,
    secrets,
    logoutUser,
}