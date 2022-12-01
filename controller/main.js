const db = require('../models/project_models');

const loginUser = function(req, res) {
    const email = req.body.username;
    const password = req.body.password;

    db.User.findOne({email: email},
        function(err, foundUser) {
            if (err) {
                console.log(err);
            } else {
                if (foundUser) {
                    if (foundUser.password === password) {
                        res.render('secrets');
                    }
                }
            }
    });
}

const registerUser = function(req, res) {
    const newUser = new db.User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err) {
        if (err)
            console.log(err);
        else
            res.render('secrets');
    });
}

module.exports = {
    loginUser,
    registerUser,
}