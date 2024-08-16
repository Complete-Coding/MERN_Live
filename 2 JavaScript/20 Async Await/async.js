function hello() {
  return 'Hello World';
}

let str = hello();
console.log(str);
console.log(typeof str);

function namaste() {
  return new Promise((resolve, reject) => {
    resolve('Namaste');
  });
}
let str3 = namaste();
console.log(str3);

async function ola() {
  return 'Ola Mundo';
}

let str2 = ola();
console.log(str2);
console.log(typeof str2);
str2.then(data => console.log(data));