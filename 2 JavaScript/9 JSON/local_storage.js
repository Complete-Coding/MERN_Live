console.log('Using Local Storage');
let userInfoStr = localStorage.getItem('userInfo');
console.log(userInfoStr);
console.log(typeof userInfoStr);
let userInfo = JSON.parse(userInfoStr);
console.log(userInfo);

localStorage.setItem('name', 'KGCoding');

let user = {
  firstName: 'Ram',
  lastName: 'Sharma',
  age: 28,
  email: 'ram@sharma.com',
  hobbies: ['music', 'sports'],
};
localStorage.setItem('userInfo', JSON.stringify(user));
