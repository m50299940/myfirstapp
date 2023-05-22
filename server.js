var express = require("express");
var fs = require("fs");
var app = express();
var http = require("http").Server(app);
const screenshot = require("screenshot-desktop");

app.use(express.static("public"));

http.listen(3000, function () {
    console.log("Server gestartet, listing on localhost:3000");
});

app.get("/", function (req, res) {
    screenshot().then((img) => {
        fs.writeFileSync(__dirname + "/public/screen.png", img);
    }).catch((err) => {
        console.log(err);
    });

    res.sendFile(__dirname + "/index.html");
});
