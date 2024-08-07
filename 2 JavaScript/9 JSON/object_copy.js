let obj = {
  a: 45,
  b: 65,
  c: 'Hello',
  d: {
    x: 87,
    y: 93,
  },
}

console.log('Obj', JSON.stringify(obj));
let objCopy = copyMyObject(obj);
console.log('Obj Copy', JSON.stringify(objCopy));

objCopy.a = 100;
objCopy.d.x = 111;

console.log('Obj', JSON.stringify(obj));
console.log('Obj Copy ', JSON.stringify(objCopy));

function copyMyObject(obj) {
  // let obj2 = obj;
  // return obj2;

  let objString = JSON.stringify(obj);
  let obj2 = JSON.parse(objString);
  return obj2;
}