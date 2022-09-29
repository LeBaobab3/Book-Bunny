const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const bookAssignedController = require("../controllers/bookAssigned");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, bookAssignedController.getAssignedBook);
router.post("/", ensureAuth, bookAssignedController.createAssigndBook);

module.exports = router;
