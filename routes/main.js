const {Router} = require('express');
const controller = require('../controller/main');
const router = Router();

router.get('/', function(req, res) {
    res.render('home');
});

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

module.exports = router;