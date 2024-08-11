function jsonStringToJson(str) {
  try {
    console.log('Try');
    return JSON.parse(str);
  } catch (error) {
    console.log('Error occured');
    console.log(error.message);
    return {};
  } finally {
    console.log('Finally');
  }
}

let newObj2 = jsonStringToJson('{"A":1}');
console.log('Obj2', newObj2);