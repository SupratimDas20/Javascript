const fs = require("fs");

console.log("____top of the file____");

function readTheFile(resolve) {
    console.log("readTheFile is called");
    setTimeout(function () {
        console.log("callback based setTimeout completed");
        resolve();
    }, 3000);
}

function setTimeoutPRoomisified(fileName) {
    console.log("SetTImeoutPromisified is called");
    // read the file and return it's value
    return new Promise(readTheFile);
}

const p = setTimeoutPRoomisified();

function callback() {
    console.log("timer is done");
}
p.then(callback);

console.log("____end of the file____");
