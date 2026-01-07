const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");
const { default: passportLocalMongoose } = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    // username and passward will be defined by default by the passport-local-mongoose, no need to define them
    isVerified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        default: undefined,
    },
    otpExpires: {
        type: Date,
        default: undefined,
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);