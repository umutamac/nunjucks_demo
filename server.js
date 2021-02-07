const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");

let nunjucks = require("nunjucks");
app.set("view engine", "html");
nunjucks.configure(["views/"],{
    autoescape: false,
    express: app
});


app.use("/", homeRoute);
app.use("/about", aboutRoute);


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});