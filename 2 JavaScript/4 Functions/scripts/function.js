function greeting() {
  console.log('Good Morning User');
}
// greeting();

// return values between 1-4
function getRandomOption() {
  let randomOption = Math.floor(Math.random() * 4 + 1);
  console.log(randomOption);
  return randomOption;
}

// let myNumber = getRandomOption();
// console.log(`I got a random number: ${myNumber}`);

function getSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(getSum(2, 3));
console.log(getSum(456, 786));

