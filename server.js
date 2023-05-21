var express = require("express");
var fs = require("fs");
var app = express();
var http = require("http").Server(app);
console.log("Majd");

app.use(express.static("public"));

http.listen(3000, function () {
    console.log("Server gestartet, listing on localhost:3000");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
