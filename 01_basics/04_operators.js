let value = 3
let negvalue = -value
console.log(value); // 3
console.log(negvalue); // -3


// operators

// 1. Arithmetic Operators: + - * / % ** 
console.log(2 + 3); // 5
console.log(2 - 3); // -1
console.log(2 * 3); // 6
console.log(2 / 3); // 0.6666666666666666
console.log(2 % 3); // 2
console.log(2 ** 3); // 8


// 2. Assignment Operators: = += -= *= /= %= **=
let a = 10
let b = 20
console.log(a = b); // 20
console.log(a += b); // 30
console.log(a -= b); // 10
console.log(a *= b); // 200
console.log(a /= b); // 10
console.log(a %= b); // 10
console.log(a **= b); // 100


// 3. Comparison Operators:<=, >=, <, >, ==, ===, !=, !==
console.log(2 <= 3); // true
console.log(2 >= 3); // false   
console.log(2 < 3); // true
console.log(2 > 3); // false
console.log(2 == 3); // false
console.log(2 === 3); // false
console.log(2 != 3); // true
console.log(2 !== 3); // true


// 4. Logical Operators: &&, ||, !
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false


// 5. Bitwise Operators: & | ^ ~ << >>
console.log(2 & 3); // 2
console.log(2 | 3); // 3
console.log(2 ^ 3); // 1
console.log(~2); // -3
console.log(2 << 3); // 16
console.log(2 >> 3); // 0

// 6. Ternary Operators: ? :
let age = 18
let isAdult = (age >= 18) ? "Adult" : "Not Adult"
console.log(isAdult); // Adult

