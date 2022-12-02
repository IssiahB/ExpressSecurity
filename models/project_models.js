const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const encKey = process.env.BASE64_32BYTE_ENCRYPT;
const sigKey = process.env.BASE64_64BYTE_SIGN;

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

userSchema.plugin(encrypt, {
    encryptionKey: encKey,
    signingKey: sigKey,
    encryptedFields: ['password'],
    additionalAuthenticatedFields: ['email']
});

const userModel = new mongoose.model('user', userSchema);

module.exports = {
    User: userModel
}