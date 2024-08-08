// Functions that return a function
const createDouble = () => {
  return num => num * 2;
}

const createDouble2 = () => {
  return function (num) {
    return num * 2;
  };
}

const twice = createDouble();
console.log(twice(5));
console.log(twice(6));

console.log(createDouble()(4));
console.log(createDouble()(7));