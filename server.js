var express = require("express");
var fs = require("fs");
var app = express();
var http = require("http").Server(app);

app.use(express.static("public"));

http.listen(3000, function () {
    console.log("Server gestartet, listing on localhost:3000");
});

app.get("/", function (req, res) {
    directoryContent = fs.readdirSync(__dirname);
    console.log(directoryContent);
    res.write(directoryContent);
    res.end();
});
