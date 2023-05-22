var requestIp = require("request-ip");
var express = require("express");
var fs = require("fs");
var app = express();
var http = require("http").Server(app);

app.use(express.static("public"));

http.listen(3000, function () {
    console.log("Server gestartet, listing on localhost:3000");
});

app.get("/", function (req, res) {
   var clientIp = requestIp.getClientIp(req);
   console.log(clientIp); 

    res.sendFile(__dirname + "/index.html");
});
