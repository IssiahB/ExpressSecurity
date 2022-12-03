const mongoose = require('mongoose');
const passport = require('passport');
const passportMongoose = require('passport-local-mongoose');

mongoose.connect(process.env.DB_URI, function(err) {
    if (!err)
        console.log('Successfully Connected To Database!');
    else
        console.log(err);
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportMongoose);

const userModel = new mongoose.model('user', userSchema);

passport.use(userModel.createStrategy());

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

module.exports = {
    User: userModel
}