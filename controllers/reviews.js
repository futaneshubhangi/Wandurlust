const Listing = require("../models/listing");
const Review = require("../models/review");

// ================= CREATE REVIEW =================
module.exports.createReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  // 🔴 IMPORTANT CHECK
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  const review = new Review(req.body.review);
  review.author = req.user._id;

  listing.reviews.push(review);

  await review.save();
  await listing.save();

  req.flash("success", "New review added!");
  return res.redirect(`/listings/${listing._id}`);
};

// ================= DELETE REVIEW =================
module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;

  const listing = await Listing.findById(id);

  // 🔴 IMPORTANT CHECK
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  await Listing.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId }
  });

  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review deleted!");
  return res.redirect(`/listings/${id}`);
};