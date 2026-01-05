const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

//SignupForm render  & Signup post route
router
    .route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signup));

const authMiddleware = passport.authenticate(
    "local",
    { failureRedirect: "/login", failureFlash: true }
);

//Log In Form render  & Log In post route
router
    .route("/login")
    .get(userController.renderLogInForm)
    .post(saveRedirectUrl, authMiddleware, userController.login);

//Log Out route
router.get("/logout", userController.logout);

module.exports = router;