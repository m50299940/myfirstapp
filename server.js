var express = require("express");
var fs = require("fs");
var app = express();
var http = require("http").Server(app);

app.use(express.static("public"));

http.listen(3000, function () {
    get("Server gestartet, listing on localhost:3000");
    get();
});

app.get("/", function (req, res) {

    get("yes");



    res.write(get("Majd"));
    res.end();
});

function get(params) {
    console.log(params);

    //console.log(typeof (params));

    const { join } = require('path');

    const fromPath = join(__dirname, "from", "move-me.txt");
    const destPath = join(__dirname, "to", "move-me.txt");

    console.log(fromPath);
    console.log(destPath);

    console.log("dkfjlöak");

    console.log(__dirname);
    console.log(__filename);

    return "<h1>" + params + "</h1>";
}
