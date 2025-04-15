let Score = 33; //In this line userScore is a number

//const { score } = req.body; //No guarantee that score is a number


console.log(typeof Score); // number
console.log(typeof (Score));

// Datatype conversion in javascript

// let score = "33"; //In this line userScore is a string
// console.log(typeof score); // string
// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 33

// let score = "33abc"
// console.log(typeof (score)); // string
// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// let score = null
// console.log(typeof (score)); // object
// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 0


// let score = undefined
// console.log(typeof (score)); // undefined
// let valueInNumber = Number(score); // convert string to number  
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// let score = true
// console.log(typeof (score)); // boolean
// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); //1


// let score = "Supratim"
// console.log(typeof (score)); // string
// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN

/*
"33"=> 33
"33abc"=> NaN
true=> 1
false=> 0
*/


// let isloggedIn = ""
// console.log(typeof (isloggedIn)); // string
// let booleanIsloggedIn = Boolean(isloggedIn); // convert string to number
// console.log(typeof booleanIsloggedIn); // boolean
// console.log(booleanIsloggedIn); // false


// let isloggedIn = "Supratim"
// console.log(typeof (isloggedIn)); // string
// let booleanIsloggedIn = Boolean(isloggedIn); // convert string to number
// console.log(typeof booleanIsloggedIn); // boolean
// console.log(booleanIsloggedIn); // true

// 1=> true
// 0=> false
// "Supratim"=> true
// ""=> false


let someNumber = 33
console.log(typeof (someNumber)); // number
let stringNumber = String(someNumber) // convert number to string
console.log(typeof stringNumber); // string
console.log(stringNumber); // "33"