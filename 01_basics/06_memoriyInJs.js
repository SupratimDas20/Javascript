// there is two types of memory in js
// 1. Stack Memory: get copy of value of declared variables.
//    - Stack memory is used for static memory allocation.
//    - It stores primitive data types (e.g., numbers, strings, booleans) and references to objects.
//    - Stack memory is managed in a last-in, first-out (LIFO) manner.
//    - When a function is called, a new block is created on the stack for its local variables.
//    - When the function returns, its block is removed from the stack, freeing up memory.
//    - Stack memory is faster than heap memory because of its structured allocation and deallocation process.
//    - Example: Primitive data types and function call stack.

// 2. Heap Memory: get reference of value of declared variables.
//    - Heap memory is used for dynamic memory allocation.
//    - It stores non-primitive data types (e.g., objects, arrays, functions) and complex data structures.
//    - Heap memory is managed in a more flexible manner, allowing for dynamic allocation and deallocation of memory.
//    - Objects and arrays are stored in heap memory, and their references are stored in stack memory.
//    - Heap memory is slower than stack memory due to its dynamic nature and less structured allocation process.
//    - Example: Objects and arrays.

// stack memory example
let myYoutubename = "supratimdasdotcom"; // string
let anotherName = myYoutubename; // another variable
anotherName = "chaiaurcode"; // another variable
console.log(myYoutubename); // supratimdasdotcom
console.log(anotherName); // supratimdasdotcom

// heap memory example
let userOne = {
    email: "user@google.com",
    name: "supratimdasdotcom",
    isActive: true,
    upi: "user@ybl"
}

let userTwo = userOne; // another variable
userTwo.name = "chaiaurcode"; // another variable
console.log(userOne.name); // chaiaurcode
console.log(userTwo.name); // chaiaurcode
