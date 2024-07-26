// iterative factorial
function getFactorialIterative(num) {
  console.log('getFactorialIterative called');
  let i = 1;
  let result = 1;
  while (i <= num) {
    result *= i;
    i++;
  }
  return result;
}

console.log(getFactorialIterative(5)); // 120

function getFactorial(num) {
  console.log(`getFactorial called for ${num}`);
  if (num === 1 || num === 0) return 1;

  let fact = getFactorial(num - 1);
  return num * fact;
}

function b() {
  console.log(getFactorial(3)); // 120
}

b();