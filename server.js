var express = require("express");
var fs = require("fs");
var app = express();
var http = require("http").Server(app);

app.use(express.static("public"));

http.listen(3000, function () {
    console.log("Server gestartet, listing on localhost:3000");
});

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");
});

console.log("nach");
const path = "./config.json"
const config = { ip: "10.10.10.10", port: 3000 };
console.log(config);
console.log(JSON.stringify(config));
console.log(JSON.parse(JSON.stringify(config)));
console.log(path, config);
fs.writeFile(path, JSON.stringify(config, null, 2), (error) => {
    if (error) {
        console.log("Nooooooooooooooooooo", error);
        return;
    }
    console.log("yyyyyyyyyyyyyyyyyyyyyes");
});
