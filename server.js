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
    res.write(get(process.memoryUsage()["heapUsed"]));
    res.write(get(__dirname));
    res.write(get(__filename));
    res.write(get(process.env.WebStorm));
    res.end();
});

function get(params) {
    console.log(params);

    return "<h1>" + params + "</h1>";
}
