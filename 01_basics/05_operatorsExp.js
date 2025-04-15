// String concaatenation
let firstName = "Supratim"
let lastName = "Das"
let fullName = firstName + " " + lastName
console.log(fullName); // Supratim Das

console.log("1" + 1); // 11
console.log(1 + "2"); // 12
console.log(1 + 1 + "2"); // 22
console.log(1 + "2" + 1); // 121    
console.log(1 + "1" + "2"); // 4


console.log("2" > 1)// 2 is converted to number 2: 2>1 is true
console.log("02" > 1)// 02 is converted to number 2: 2>1 is true

//For these types of operations, JS converts the string to a number and then performs the operation.
// This is called type coercion. due to this, the result of the operation may not be what you expect.


// try to avoid these types of operations.
console.log(null > 0); // false
console.log(null == 0); // false  
console.log(null >= 0); // true
console.log(undefined > 0); // false  
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// ===: strict equality operator: checks for value and type
console.log(1 === 1); // true
