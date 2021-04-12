const path = require("path");
const router = require("express").Router();
const googleRoutes = require("./google");
const bookRoutes = require("./book");


router.use("/google", googleRoutes);

router.use("/book", bookRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;