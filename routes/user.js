const express = require("express");
const router = express.Router();
const passport = require("passport");

const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

// SIGNUP → GET + POST
router.route("/signup")
  .get(userController.renderSignupForm)
  .post(userController.signup);

// LOGIN → GET + POST
router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login"
    }),
    userController.login
  );

// LOGOUT → single route (no need for router.route)
router.get("/logout", userController.logout);

module.exports = router;
