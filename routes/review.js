const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {
  validatereview,
  isLoggedIn,
  isreviewAuthor,
} = require("../middleware.js");
const { makeReview, deleteReview } = require("../controllers/review.js");

//Reviews
//post
router.post("/", isLoggedIn, validatereview, wrapAsync(makeReview));

//DELETE reviews route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isreviewAuthor,
  wrapAsync(deleteReview)
);

module.exports = router;
