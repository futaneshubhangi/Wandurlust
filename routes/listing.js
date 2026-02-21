const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");
const listingController = require("../controllers/listing");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

/* ================= INDEX + CREATE ================= */
router.route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"), // ✅ MUST BE FIRST
    validateListing,                 // ✅ NOW req.body.listing EXISTS
    wrapAsync(listingController.createListing)
  );

/* ================= NEW ================= */
router.get("/new", isLoggedIn, listingController.renderNewForm);

/* ================= SHOW + UPDATE + DELETE ================= */
router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"), // ✅ MUST BE FIRST
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.deleteListing)
  );

/* ================= EDIT ================= */
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);

module.exports = router;