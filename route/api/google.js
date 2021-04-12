const router = require("express").Router();
const googleCtrl = require("../../controller/google");

// Matches with "/api/google"
router
  .route("/")
  .get(googleCtrl.findAll);

module.exports = router;