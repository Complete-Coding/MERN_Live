let num = 6;
// let result;
// if (num % 2 == 0) {
//   result = 'Even';
// } else {
//   result = 'Odd';
// }
let result = num % 2 == 0 ? 'Even' : 'Odd';
console.log(`The number is ${result}.`);

let username = 0;
let fallbackValue = 'Guest';
let greeting = `Welcome ${ username || fallbackValue}`;
console.log(greeting);

username = 0;
fallbackValue = 'Guest';
greeting = `Welcome ${ username ?? fallbackValue}`;
console.log(greeting);