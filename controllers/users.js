const User = require("../models/user.js");
const { sendOTP } = require("../utils/sendMail.js");

// SignupForm render route
module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup");
};

// Helper to generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// SignUp Post route
module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const otp = generateOTP();

        const newUser = new User({
            email,
            username,
            otp,
            otpExpires: Date.now() + 10 * 60 * 1000 // 10 minutes
        });

        // 1. First: Register the User in MongoDB
        console.log("Attempting to register user in DB...");
        const registeredUser = await User.register(newUser, password);
        console.log("User registered successfully in DB:", registeredUser._id);

        // 2. Second: Try to send the Email
        try {
            console.log("Attempting to send OTP email to:", email);
            await sendOTP(email, otp);
            console.log("Email sent successfully!");

            // Store email in session (Safe way) instead of global variable
            req.session.userEmail = email;

            req.flash("success", "OTP sent to your Email");
            res.redirect("/verify-otp");

        } catch (emailErr) {
            // If User is saved but Email fails
            console.error("FATAL ERROR: User saved but Email failed to send.", emailErr);

            // Optional: Delete the user if email fails so they can try again with the same username
            await User.findByIdAndDelete(registeredUser._id);

            req.flash("error", "Error sending email. Please check if the email is valid.");
            res.redirect("/signup");
        }

    } catch (err) {
        console.error("General Signup Error:", err);
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

// OTP verification form render route
module.exports.renderOTPverifyForm = (req, res) => {
    // Retrieve email from session
    const userEmail = req.session.userEmail || "Unknown Email";
    res.render("users/verify_otp", { userEmail });
};

// OTP verification post route
module.exports.verify_otp = async (req, res) => {
    try {
        const { otp } = req.body;
        const user = await User.findOne({
            otp: otp,
            otpExpires: { $gt: Date.now() }
        });

        if (!user) {
            req.flash("error", "OTP is invalid or expired!");
            return res.redirect("/verify-otp");
        }

        user.isVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;

        await user.save();

        req.flash("success", "Email verified successfully!");

        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust!");

            // Clean up session
            delete req.session.userEmail;

            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", "Something went wrong during verification.");
        res.redirect("/verify-otp");
    }
};

// Log In form render route
module.exports.renderLogInForm = (req, res) => {
    res.render("users/login");
};

// Log In post route
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to WanderLust!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

// Log Out route
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logout Successful!");
        res.redirect("/listings");
    })
};