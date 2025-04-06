function waitFor3S(resolve) {
    setTimeout(resolve, 3000);
}
function setTImeoutPromisified() {
    return new Promise(waitFor3S);
}
function main() {
    console.log("main is called");
}

setTImeoutPromisified(3000).then(main);
setTimeout(main, 3000);