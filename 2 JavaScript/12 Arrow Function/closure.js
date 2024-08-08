let first = 56;

let outer = (outerArg) => {
  const outerConst = 3.14;

  let inner = (innerArg) => {
    const innerConst = 2.71;
    console.log(`first: ${first}`);
    console.log(`outerArg: ${outerArg}`);
    console.log(`outerConst: ${outerConst}`);
    console.log(`innerArg: ${innerArg}`);
    console.log(`innerConst: ${innerConst}`);
  };

  console.log(`outer first: ${first}`);
  console.log(`outer outerArg: ${outerArg}`);
  console.log(`outer outerConst: ${outerConst}`);
  return inner;
}

//outer(78)(90);
let createCounter0 = () => {
  let count = 0;
  return function() {
    return ++count;
  };
}

let createCounter = () => {
  let count = 0;
  return () => ++count;
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = createCounter();
console.log(counter2());


