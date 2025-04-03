const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
    console.log(contents);
});
fs.readFile("b.txt", "utf-8", function (err, contents) {
    console.log(contents);
});