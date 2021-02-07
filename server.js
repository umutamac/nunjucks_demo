const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require("./routes");

// nunjucks setup
let nunjucks = require("nunjucks");
app.set("view engine", "html");
nunjucks.configure(["views/"],{
    autoescape: false,
    express: app
});

//when routes are called, go to ./routes folder
app.use(routes);

// start server on given PORT
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});