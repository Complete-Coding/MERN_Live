let parseStringToJson = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log('Error occured');
    console.log(error.message);
    return {};
  }
}

let obj = {
  a: 1,
  b: 2,
  x: 3,
}

let objString = JSON.stringify(obj);
console.log(objString);
let newObj = parseStringToJson(objString);
console.log(newObj);

let newObj2 = parseStringToJson('{"A":;1}');
console.log(newObj2);
console.log('End');