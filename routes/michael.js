const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/",(req, res, next) => {
    //console.log("home ------ axios going out");
    axios({
        method: "GET",
        url: "https://reqres.in/api/users?page=2",
        headers: {"Content-Type":"application/json"}
    }).then((payload) => {
        //console.log("mike ----- response came back");
        //console.log(data);
        res.render("pages/michael.html", {michael: payload.data.data});
    }).catch((err) => console.log(err))
})

module.exports = router;