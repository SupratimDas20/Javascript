// function waitFor3S(resolve) {
//     setTimeout(resolve, 3000);
// }
// function main() {
//     console.log("main is called");
// }
// waitFor3S(main);



function waitFor3S(resolve) {
    setTimeout(resolve, 10000);
}
function setTimeoutPromisified() {
    return new Promise(waitFor3S);
}
function main() {
    console.log("main is called");
}
setTimeoutPromisified().then(main);