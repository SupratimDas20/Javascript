let myDate = new Date();
console.log(myDate); // current date and time
console.log(myDate.toString()); // current date and time in string format
console.log(myDate.toLocaleString()); // current date and time in local format
console.log(typeof myDate); //

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate); // 23 Jan 2023

let myCreatedDate1 = new Date("2023-01-23")
console.log(myCreatedDate1); // 23 Jan 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2); // 23 Jan 2023 05:03:00

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); // current timestamp in milliseconds

console.log(myCreatedDate.getTime());
console.log(Math.floor(myCreatedDate.getTime() / 1000)); // current timestamp in seconds