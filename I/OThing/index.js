const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8");//reading file synchronously
console.log(contents);
const contents2 = fs.readFileSync("b.txt", "utf-8");//reading file synchronously
console.log(contents2);