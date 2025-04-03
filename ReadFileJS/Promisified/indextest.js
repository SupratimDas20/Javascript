const fs = require("fs");
function readTheFile(sendTheFinalValueHere) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        sendTheFinalValueHere(data);
    });
    fs.readFile("b.txt", "utf-8", function (err, data) {
        sendTheFinalValueHere(data);
    });
}
function readFile() {
    // read the file and retrun the value
    return new Promise(readTheFile);
}
const p = readFile();
const p1 = readFile();
function callback(contents) {
    console.log(contents);
}
p.then(callback);
p1.then(callback);

