const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => res.json({ msg: "WOrking" }));

module.exports = router;