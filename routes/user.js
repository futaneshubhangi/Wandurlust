const express = require("express");
const router = express.Router();
const passport = require("passport");

const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

// ================= HOME =================
router.get("/", (req, res) => {
  res.redirect("/listings");
});

// ================= SIGNUP =================
router.route("/signup")
  .get(userController.renderSignupForm)
  .post(userController.signup);

// ================= LOGIN =================
router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login"
    }),
    (req, res) => {
      req.flash("success", "Welcome back!");
      const redirectUrl = res.locals.redirectUrl || "/listings";
      return res.redirect(redirectUrl);
    }
  );

// ================= LOGOUT =================
router.get("/logout", userController.logout);

module.exports = router;