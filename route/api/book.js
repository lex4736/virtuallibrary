const router = require("express").Router();
const bookCtrl = require("../../controller/book");

// Matches with "/api/books"
router.route("/")
  .get(bookCtrl.findAll)
  .post(bookCtrl.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookCtrl.findById)
  .put(bookCtrl.update)
  .delete(bookCtrl.remove);

module.exports = router;