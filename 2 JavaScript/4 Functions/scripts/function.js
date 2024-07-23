function greeting() {
  console.log('Good Morning User');
}
greeting();

// return values between 1-4
function getRandomOption() {
  let randomOption = Math.floor(Math.random() * 4 + 1);
  console.log(randomOption);
  return randomOption;
}

let myNumber = getRandomOption();
console.log(`I got a random number: ${myNumber}`);

