"use strict"; //treat all JS code as newer version.

//    alert("Hello World"); 

//will show an error here as we are 
// running javascript in  nodejs environment not in
// browser environment.

// Mostly in javascript we avoid semicolons.
// code readability should be the 1st Prioirty.
//Mostly we willl not use any semicolons in our code.
// But in some cases we will use semicolons.

console.log(3 + 3); console.log("Supratim") //this line of code will run and also will give result.
// but this is not a good practice.

// Data types in javascript

// 1. Primitive data types
// a. Number
// b. String
// c. Boolean
// d. Undefined
// e. Null
// f. Symbol (ES6)
// g. BigInt (ES11)


// 2. Non-primitive data types
// a. Object
// b. Array
// c. Function
// d. Date
// e. RegExp
// f. Map
// g. Set
// h. WeakMap
// i. WeakSet
// j. Promise
// k. Error

// example of primitive data types
let firstName = "Supratim"; // string
let age = 23; // number
let isMarried = false; // boolean
let isSingle = true; // boolean
let isAvailable; // undefined
let isNull = null; // null
let isSymbol = Symbol("symbol"); // symbol
let isBigInt = BigInt(123456789012345678901234567890); // BigInt

console.log(typeof firstName); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof isSingle); // boolean
console.log(typeof isAvailable); // undefined   
console.log(typeof isNull); // object (this is a bug in javascript)
console.log(typeof isSymbol); // symbol
console.log(typeof isBigInt); // bigint