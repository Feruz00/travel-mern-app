const mongoose = require('mongoose');
const moment = require("moment");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    username: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minglength: 5
    },
    role : {
        type:Number,
        default: 0 
    },
    image: String
});
userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

const User = mongoose.model( 'User' , userSchema );

module.exports = {User};
