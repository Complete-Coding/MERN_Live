// Normal Function
function add1(first, second) {
  return first + second;
}
console.log(add1(4, 6));

// Anonymous function
const add2 = function(first, second) {
  return first + second;
}
console.log(add2(4, 9));

// Arrow Function
const add3 = (first, second) => {
  return first + second;
}
console.log(add3(8, 9));

const square = num => {
  return num * num;
}
console.log(square(5));

const square1 = num => num * num;
console.log(square1(6));

// Application with Array
const numbers = [2, 4, 6, 8, 10];
let squares = numbers.map(function (num) {
  return num * num;
});
let squares1 = numbers.map(num => num * num);