const fs = require("fs");
fs.readFile("a.txt", "utf-8", function (err, contents) {//Asynchronous function
    console.log(contents);
});
fs.readFile("b.txt", "utf-8", function (err, contents) {//Asynchronous function
    console.log(contents);
});