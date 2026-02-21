const Listing = require("../models/listing");
const axios = require("axios");

// ================= INDEX =================
module.exports.index = async (req, res) => {
  const { category, search } = req.query;
  let query = {};

  if (search && search.trim() !== "") {
    const regex = new RegExp(search.trim(), "i");
    query.$or = [
      { title: regex },
      { location: regex },
      { country: regex },
      { description: regex }
    ];
  }

  if (category) {
    query.category = category;
  }

  const allListings = await Listing.find(query);

  res.render("listings/index.ejs", {
    allListings,
    selectedCategory: category || null,
    search: search || ""
  });
};

// ================= NEW =================
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// ================= CREATE (FIXED) =================
module.exports.createListing = async (req, res) => {
  // 🔴 SAFETY CHECK
  if (!req.body.listing) {
    req.flash("error", "Invalid listing data");
    return res.redirect("/listings/new");
  }

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

  // ================= IMAGE =================
  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
  }

  // ================= GEOCODING =================
  const locationText = `${newListing.location}, ${newListing.country}`;

  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: locationText,
          format: "json",
          limit: 1
        },
        headers: {
          "User-Agent": "Wanderlust-App"
        }
      }
    );

    if (response.data.length > 0) {
      newListing.geometry = {
        type: "Point",
        coordinates: [
          response.data[0].lon,
          response.data[0].lat
        ]
      };
    }
  } catch (err) {
    console.log("Geocoding failed:", err.message);
  }

  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

// ================= SHOW =================
module.exports.showListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: { path: "author" }
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested does not exist");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

// ================= EDIT =================
module.exports.editListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image?.url || "";
  originalImageUrl = originalImageUrl.replace(
    "/upload",
    "/upload/h_300,w_250"
  );

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// ================= UPDATE =================
module.exports.updateListing = async (req, res) => {
  const listing = await Listing.findByIdAndUpdate(
    req.params.id,
    req.body.listing,
    { new: true }
  );

  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${listing._id}`);
};

// ================= DELETE =================
module.exports.deleteListing = async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};