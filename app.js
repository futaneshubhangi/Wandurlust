if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const session = require("express-session");
const MongoStore = require("connect-mongo"); // ✅ ONLY THIS
const flash = require("connect-flash");

// ================= ENV =================
const dbUrl = process.env.ATLASTDB_URL;
const SESSION_SECRET = process.env.SECRET|| "mysupersecretcode";

// ================= ROUTES =================
const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

// ================= VIEW ENGINE =================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// ================= MIDDLEWARE =================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ================= SESSION STORE (v4 CORRECT) =================
const store = MongoStore.create({
    mongoUrl: dbUrl,
    secret: SESSION_SECRET,
    touchAfter: 24 * 3600
});

store.on("error", (e) => {
    console.log("SESSION STORE ERROR", e);
});

app.use(session({
    store,
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}));

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
app.use("/", userRouter);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

// ================= DATABASE =================
mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.log("❌ Mongo Error:", err));

// ================= 404 =================
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// ================= ERROR HANDLER =================
app.use((err, req, res, next) => {
    if (res.headersSent) return next(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    res.status(statusCode).render("error.ejs", { message });
});

// ================= SERVER =================
app.listen(8080, () => {
    console.log("🚀 Listening on port 8080");
});