const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const {
  renderSignupform,
  postSignup,
  renderLoginform,
  postLogin,
  logOut,
} = require("../controllers/users.js");

router.route("/signup").get(renderSignupform).post(wrapAsync(postSignup));

router
  .route("/login")
  .get(renderLoginform)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    postLogin
  );

router.get("/logout", logOut);

module.exports = router;
