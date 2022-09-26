const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const booksController = require("../controllers/books");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", booksController.getBook);
router.get("/:id", ensureAuth, booksController.getBook);

router.post("/addBook", upload.single("file"), booksController.createBook);

router.delete("/deleteBook/:id", booksController.deleteBook);

module.exports = router;
