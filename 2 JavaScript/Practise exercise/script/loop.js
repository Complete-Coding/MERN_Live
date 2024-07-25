console.log("Practise Exercise");

function printMultiplicationTable(num) {
  console.log("Multiplication Table");
  let i = 1; // initialization
  while (i <= 10) { // condition
    console.log(`${num} X ${i} = ${num * i}`);
    i++; // update
  }
}

function printMultiplicationTableFor(num) {
  console.log("Multiplication Table");
  for (let i = 1; i <= 10; i++) { 
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

// let tableNum = prompt("Enter the number for which table has to be generated:");
// printMultiplicationTable(tableNum);

function getFactorial(num) {
  let i = 1;
  let result = 1;
  while (i <= num) {
    result *= i;
    i++;
  }
  return result;
}

// console.log("Factorial");
// let num = prompt("Enter the number for which Factorial needs to be calculated:");
// console.log(getFactorial(num));


function reverseTheDigit(num) {
  let result = 0;
  for (; num > 0; num = Math.floor(num/10)) {
    let rem = num % 10;
    result = result * 10 + rem;
  }
  return result;
}
console.log(reverseTheDigit(3487));
console.log(reverseTheDigit(1234567));

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
// console.log(isPrime(17));
// console.log(isPrime(4));
// console.log(isPrime(99));
// console.log(isPrime(76543));


function inputPositiveNumber() {
  let num;
  do {
    num = prompt('Enter a positive number:');
    console.log(num);
  } while (num < 0);
  return num;
}

let num = inputPositiveNumber();
console.log(`The positive number entered is: ${num}`);

