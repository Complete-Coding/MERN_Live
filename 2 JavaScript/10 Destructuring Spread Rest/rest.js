let even = [2, 4, 6, 8, 10];
// let first = even[0];
// let second = even[1];

let [first, second, ...bachGaye] = even;
console.log('first', first);
console.log('second', second);
console.log('bachGaye', bachGaye);