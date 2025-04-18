//denoted by single '' or double quotes " "

//String concatenation in a outdated fashion
const firstName = "John";
const lastName = "Doe";
const repoCount = 10;
console.log(firstName + lastName + repoCount + "Value"); // JohnDoe10Value

// String concatenation in a modern fashion
const fullName = `${firstName} ${lastName} ${repoCount} Value`; // Template literals (backticks)
console.log(fullName); // John Doe 10 Value

// `` (backticks) are used for template literals, which allow for multi-line strings and string interpolation.
// Template literals are enclosed in backticks (``) instead of single or double quotes.

const userName = "supratimdasdotcom";
const repocount = 50;
console.log(`Hello my name is ${userName}  and my repo count ${repocount}`)

// Another way of declaring string 
const gameName = new String('supratim')
console.log(gameName); // String { 'supratim' } - Object
console.log(gameName.length); // 7 - Length of string
console.log(gameName[0]); // s - First character of string
console.log(gameName.charAt(0)); // s - First character of string
console.log(gameName.toUpperCase()); // SUPRATIM - Convert to uppercase
console.log(gameName.toLowerCase()); // supratim - Convert to lowercase
console.log(gameName.indexOf('p')); // 2 - Index of first occurrence of 'p'