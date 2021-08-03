const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    password: {type: String, required: true},
    mobileNo: {type: Number, required: true},
    userID: {type: String}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);