const User = require("../models/user");

// ================= SIGNUP FORM =================
module.exports.renderSignupForm = (req, res) => {
  return res.render("users/signup.ejs");
};

// ================= SIGNUP =================
module.exports.signup = async (req, res, next) => {
  try {
    console.log("📥 Signup request body:", req.body);

    const { username, email, password } = req.body;

    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);

    console.log("✅ User created:", registeredUser.username);

    req.login(registeredUser, err => {
      if (err) return next(err);
      console.log("🔐 User logged in after signup");
      req.flash("success", "Welcome to Wanderlust!");
      return res.redirect("/listings");
    });

  } catch (e) {
    console.log("❌ Signup error:", e.message);
    req.flash("error", e.message);
    return res.redirect("/signup");
  }
};

// ================= LOGIN FORM =================
module.exports.renderLoginForm = (req, res) => {
  return res.render("users/login.ejs");
};

// ================= LOGIN =================
// (kept for reuse, but NOT used in routes now)
module.exports.login = (req, res) => {
  req.flash("success", "Welcome back!");
  const redirectUrl = res.locals.redirectUrl || "/listings";
  return res.redirect(redirectUrl);
};

// ================= LOGOUT =================
module.exports.logout = (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    req.flash("success", "Logged out successfully!");
    return res.redirect("/listings");
  });
};