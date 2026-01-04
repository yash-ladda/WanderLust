const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("users/signup");
});

router.post("/signup", wrapAsync(async (req, res) => {

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
    
}));

router.get("/login", (req, res) => {
    res.render("users/login");
});

const authMiddleware = passport.authenticate(
    "local", 
    { failureRedirect: "/login", failureFlash: true }
);

router.post("/login", saveRedirectUrl, authMiddleware, async(req, res) => {
    req.flash("success", "Welcome back to WanderLust! ");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    // delete req.session.redirectUrl;
    res.redirect(redirectUrl);
});

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "Logout Successful! ");
        res.redirect("/listings");
    })
});

module.exports = router;