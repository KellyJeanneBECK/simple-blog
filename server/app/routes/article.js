const express = require("express");
const { browse, read, add } = require("../controllers/article.js");

const router = express.Router();

router.get("/", browse);
router.get("/:id", read);
router.post("/", add);

module.exports = router;
