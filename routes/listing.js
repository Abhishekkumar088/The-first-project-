const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const {
  index,
  renderNewform,
  showListing,
  createListing,
  editPage,
  updateListing,
  deleteListing,
} = require("../controllers/listing.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Create route  & // index route
router
  .route("/")
  .get(wrapAsync(index))
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image][url]"),
    wrapAsync(createListing)
  );

//New route
router.get("/new", isLoggedIn, renderNewform);

//show route & update route & //Destroy route

router
  .route("/:id")
  .get(wrapAsync(showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    upload.single("listing[image][url]"),
    wrapAsync(updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(deleteListing));

//Edit route
router.get("/:id/edit", isOwner, isLoggedIn, wrapAsync(editPage));

module.exports = router;
