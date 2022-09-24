const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const booksController = require("../controllers/books");
const studentsController = require("../controllers/students");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/dash", ensureAuth, booksController.getDash);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
// router.get("/book", booksController.getBook);
// router.post("/book", booksController.postBook);
// router.get("/student", studentsController.getStudent);
// router.post("/student", studentsController.postStudent);

module.exports = router;
