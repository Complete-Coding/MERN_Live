console.log('Different Methods of Array');
let arr = [1, 12, 45, 11, 9, 8, 0];
let obj = {};
console.log('isArray:', Array.isArray(arr));
console.log('isArray:', Array.isArray(obj));

console.log('toString:', arr);
arr.push(15);
console.log('toString:', arr);
arr.pop();
console.log('toString:', arr);

arr.sort();
console.log('toString:', arr);

arr.forEach(function(item, i) {
  if (i === 2) return;
  console.log('forEach:', item, i);
});

function tempPrint(val) {
  if (val % 2 === 0) {
    console.log('Inside condition');
    return;
  }
  console.log(val);
}

for (let i = 1 ; i < 10; i++) {
  tempPrint(i);
}

let newArr = arr.map(function(item) {
  return item * item;
});

let thirdArr = newArr.filter(function(item) {
  return item % 2 === 0;
});

console.log('map:', arr);
console.log('map:', newArr);
console.log('map:', thirdArr);


