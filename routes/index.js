const router = require("express").Router();

const homeRoute = require("./home");
const michaelRoute = require("./michael");
const janetRoute = require("./janet");

router.use("/", homeRoute);
router.use("/michael", michaelRoute);
router.use("/janet", janetRoute);

module.exports = router;