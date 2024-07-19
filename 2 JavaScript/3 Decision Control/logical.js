console.log("And Operator");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("Or Operator");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("Not Operator");
console.log(!true);
console.log(!false);
console.log(!!true);


// if (num > 0) {
//   if (num % 2 === 0) {
//     console.log("Positive and Even number");
//   } else {
//     console.log("Positive and Odd number");
//   }
// } else if (num < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Number is Zero");
// }

let num = 5;
if (num > 0 && num % 2 === 0) {
  console.log("Positive and Even number");
} else if (num > 0) {
  console.log("Positive and Odd number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Number is Zero");
}
