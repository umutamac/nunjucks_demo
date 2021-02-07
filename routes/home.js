const express = require("express");
const router = express.Router();
// const axios = require("axios");

router.get("/",(req, res, next) => {
    res.render("pages/home.html");
});

module.exports = router;