function timeout() {
    console.log("Click the button!");
}
console.log("Hi");
setTimeout(timeout, 1000);
console.log("Welcome to loupe.");
let c = 0;
for (let i = 0; i < 1000000; i++) {
    c = c + 1;
}
console.log("Expensive operations done");
