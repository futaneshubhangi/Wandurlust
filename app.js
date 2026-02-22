if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ================= IMPORTS =================
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

// ================= ENV =================
const dbUrl = process.env.ATLASDB_URL;
if (!dbUrl) {
  throw new Error("❌ ATLASDB_URL is missing");
}

const SESSION_SECRET =
  process.env.SESSION_SECRET || "mysupersecretcode";

// ================= DATABASE =================
mongoose
  .connect(dbUrl)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ================= VIEW ENGINE =================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// ================= BASIC MIDDLEWARE =================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ================= SESSION STORE =================
const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 3600, // 1 day
});

store.on("error", (e) => {
  console.log("❌ SESSION STORE ERROR", e);
});

// ================= SESSION CONFIG =================
app.use(
  session({
    store,
    name: "session",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // ✅ IMPORTANT: works on localhost
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
  })
);

// ================= FLASH =================
app.use(flash());

// ================= PASSPORT =================
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ================= GLOBAL LOCALS =================
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ================= ROUTES =================
const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

app.use("/", userRouter);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

// ================= 404 =================
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// ================= ERROR HANDLER =================
// 🔥 TEMP DEBUG ERROR HANDLER (REQUIRED)
app.use((err, req, res, next) => {
  console.log("🔥🔥🔥 REAL ERROR 🔥🔥🔥");
  console.log(err);
  res.status(500).send(err.message || err);
});

// ================= SERVER =================
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});