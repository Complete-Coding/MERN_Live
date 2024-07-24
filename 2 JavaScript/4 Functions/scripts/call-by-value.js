function sum(num1, num2) {
  num1 += num2;
  return num1;
}

let x = 10, y = 5;
console.log(`x: ${x}, y: ${y}`);
console.log(sum(x, y));
console.log(`x: ${x}, y: ${y}`);