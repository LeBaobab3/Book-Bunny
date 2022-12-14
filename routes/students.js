const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const studentsController = require("../controllers/students");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", studentsController.getStudent);

router.get("/:id", ensureAuth, studentsController.getStudent);

router.post(
  "/addStudent",
  upload.single("file"),
  studentsController.createStudent
);

router.delete("/deleteStudent/:id", studentsController.deleteStudent);

module.exports = router;
