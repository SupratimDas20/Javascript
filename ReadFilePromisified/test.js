const fs = require("fs");
function readTheFile(sendTheValueHere) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        sendTheValueHere(data);
    });
}
function readFile(fileName) {
    // read the file and returns the value
    return new Promise(readTheFile);
}
const p = readFile();
function callback(contents) {
    console.log(contents);
}
p.then(callback);