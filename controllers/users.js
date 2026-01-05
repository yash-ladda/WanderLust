const User = require("../models/user.js");

//SignupForm render route
module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup");
};

//SignUp Post route
module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        // console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust! ");
            res.redirect("/listings");
        });
    } catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

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