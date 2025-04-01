function waitFor3S(resolve) {
    setTimeout(resolve, 3000);
}
function main() {
    console.log("main is called");
}
waitFor3S(main);