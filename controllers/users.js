const User = require("../models/user.js");
const {sendOTP} = require("../utils/sendMail.js");

//SignupForm render route
module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup");
};

//SignUp Post route
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
let userEmail = " ";
module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const otp = generateOTP();
        const newUser = new User({
             email, 
             username ,
             otp,
             otpExpires: Date.now() + 10 * 60 * 1000
        });
        userEmail = email;
        await User.register(newUser, password);
        await sendOTP(email, otp);
        req.flash("success", "OTP sent to your Email");
        res.redirect("/verify-otp");
    } catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

//OTP verification form render route
module.exports.renderOTPverifyForm = (req, res) => {
    res.render("users/verify_otp", {userEmail});
};

//OTP verification post route
module.exports.verify_otp = async (req, res) => {
    const {otp} = req.body;    
    const user = await User.findOne({
        otp,
        otpExpires: {$gt: Date.now()}
    });

    if(!user) {
        req.flash("error", "OTP is invalid or expired! ");
        return res.redirect("/verify-otp");
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();

    req.flash("success", "Email verified successfully! ");

    req.login(user, (err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "Welcome to WanderLust! ");
        res.redirect("/listings");
    });
};

//Log In form render route
module.exports.renderLogInForm = (req, res) => {
    res.render("users/login");
};

//Log In post route
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to WanderLust! ");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

//Log Out route
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logout Successful! ");
        res.redirect("/listings");
    })
};