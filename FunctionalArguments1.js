// Passing in what needs to be done as an argument
function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function substract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a - b;
}
function doOperation(a, b, op) {
    return op(a, b);
}
console.log(doOperation(23, 45, sum));
console.log(doOperation(98, 2, multiply));
console.log(doOperation(45, 32, substract));
console.log(doOperation(87, 3, divide));
