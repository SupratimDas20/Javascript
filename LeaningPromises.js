//A Promise in JavaScript is an object that represents 
// the eventual completion (or failure) of an asynchronous 
// operation and its resulting value. 
function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
}
function callback() {
    console.log("3 secs have passed");
}
setTimeoutPromisified(3000).then(callback);
console.log("Done");