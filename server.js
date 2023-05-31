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
    res.send(directoryContent);
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



function fib(n) {
    counter += 1
    if (n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

console.log("number \t fib \t aufrufe");
counter = 0
for (let index = 0; index < 50; index++) {
    counter = 0
    console.log(index + "\t" + fib(index) + "\t" + counter);
}
