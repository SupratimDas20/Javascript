/*
    JavaScript Data Types Summary:

How data is stored in memory and how it can be manipulated or accessed.
Determines whether it is a primitive or non-primitive data type.
Data types are a fundamental concept in programming that define 
the kind of data that can be stored and manipulated within a program. 
In JavaScript, data types are divided into two main categories: 
primitive and non-primitive (or reference) data types. Understanding these data types is crucial for effective programming and debugging.
 

Data Types: 

 1. Primitive Data Types:

    - Number:   Represents both integer 
                and floating-point numbers.

    - String:   Represents a sequence of 
                characters enclosed in single 
                or double quotes.

    - Boolean:  Represents a logical entity and
                can have two values: true or false.

    - Undefined:  A variable that has been declared 
                  but has not yet been assigned a value.

    - Null:   Represents the intentional absence 
              of any object value. It is a primitive 
              value that represents "nothing".

    - Symbol:   A unique and immutable primitive value 
                that can be used as the key of an object property.
                Symbols are often used to create private properties or methods in objects.

    - BigInt:   A numeric data type that can represent integers 
                with arbitrary precision. It is used for large integers 
                that are beyond the range of the Number type.



 2. Non-Primitive Data Types:
    - Object:   A collection of properties, where each property 
                is defined as a key-value pair. Objects can be created 
                using object literals or the Object constructor.
                Objects can store multiple values and complex data structures.

    - Array:    A special type of object that is used to store 
                multiple values in a single variable. Arrays are 
                ordered collections of values and can contain elements 
                of different types.

    - Function: A block of code designed to perform a particular task. 
                Functions are first-class objects in JavaScript, 
                meaning they can be assigned to variables, 
                passed as arguments, and returned from other functions.

    - Date: A built-in object that represents dates and times. 
            It provides methods for manipulating and formatting dates.
*/

const score = 100; // Number
const name = "John"; // String
const isActive = true; // Boolean
let userEmail; // Undefined
const emptyValue = null; // Null

const uniqueId = Symbol("id"); // Symbol
const anotherUniqueId = Symbol("id"); // Symbol (different from the previous one)
console.log(uniqueId === anotherUniqueId); // false

const bigNumber = 12345678901234567890n; // BigInt
const bigIntValue = BigInt(123456789012345678901234567890); // BigInt


const heros = ["spiderman", "batman", "superman"]; // Array

let myObject = {
    name: "John",
    age: 30,
    city: "New York"
}; // Object

const myFunction = function () { // Function
    console.log("Hello, World!");
}