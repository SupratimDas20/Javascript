// function random() {

// }

// let p = new Promise(random);
// console.log(p);

function random(resolve) {
    resolve();

}

let p = new Promise(random);

function callback() {
    console.log("promise succeded");
}

p.then(callback);