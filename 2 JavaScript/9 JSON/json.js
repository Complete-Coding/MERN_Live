let user = {
  firstName: 'Ram',
  lastName: 'Sharma',
  age: 28,
  email: 'ram@sharma.com',
  hobbies: ['music', 'sports'],
};
console.log(user);

let userStr = JSON.stringify(user);
console.log(userStr);
console.log(typeof userStr);

let myStr = '{"firstName":"Shyam","lastName":"Sharma","age":29,"rollNo":87,"email":"ram@sharma.com","hobbies":["music","sports"]}';
let newUser = JSON.parse(myStr);
console.log(newUser);
console.log(newUser["rollNo"]);