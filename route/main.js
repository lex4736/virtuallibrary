const path = require("path");
const apiRouting = require("./api");
const router = require("express").Router();

router.use("/api", apiRouting);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;