const {Router} = require('express');
const controller = require('../controller/main');
const router = Router();

router.get('/', function(req, res) {
    res.render('home');
});

router.route('/secrets')
    .get(controller.secrets);

router.route('/login')
    .get(function(req, res) {
        res.render('login');
    })
    .post(controller.loginUser);

router.route('/register')
    .get(function(req, res) {
        res.render('register');
    })
    .post(controller.registerUser);

router.route('/logout')
    .get(controller.logoutUser);

module.exports = router;