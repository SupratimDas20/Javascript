// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, duration);
//     });
// }
// function callback() {
//     console.log("1 second has passed");
// }
// setTimeoutPromisified(1000).then(callback);



setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
        console.log("hello");
        setTimeout(function () {
            console.log("hello there");
        }, 5000);
    }, 3000);
}, 1000);
console.log("outside the callback hell");