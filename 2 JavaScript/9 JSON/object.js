console.log('Object Equality');
let a = {firstName: 'Raju'};
let b = a;
let c = {firstName: 'Raju'};

console.log(a == b); // true
console.log(a === b); // true
console.log(a == c); // false
console.log(a === c); // false


let student = {
    firstName: 'Raju',
    lastName: 'Kumar',
    age: 20,
    address: {
        houseNo: 10,
        road: 'MG Road',
        city: 'Bangalore',
        state: 'Karnataka',
    },
    subjects: ['Maths', 'Science', 'English'],
    feesPaid: true,
};

console.log(Object.keys(student));

let student2 = {
  firstName: 'Ranjan',
  lastName: 'Dev',
  age: 24,
  address: {
      houseNo: 12,
      road: 'Abdul Kalam Road',
      city: 'Muzaffarnagar',
      state: 'Uttar Pradesh',
  },
  subjects: ['Maths', 'Science', 'English'],
  feesPaid: true,
};

student.friends = [student2];

console.log(JSON.stringify(student));