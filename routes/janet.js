const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/",(req, res, next) => {
    //console.log("about ------ axios going out");
    axios({
        method: "GET",
        url: "https://reqres.in/api/users/2",
        headers: {"Content-Type":"application/json"}
    }).then((payload) => {
        //console.log("janet ------ response came");
        //console.log(data);

        res.render("pages/janet.html", {janet: payload.data.data});
    }).catch((err) => console.log(err))
});

module.exports = router;