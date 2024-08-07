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

function printName(argStudent) {
  // let firstName = argStudent.firstName;
  // let lastName = argStudent.lastName;
  let {firstName, lastName, address} = argStudent;
  let {houseNo} = address;

  console.log('Name:', firstName, lastName);
  let result = {firstName, lastName: lastName};
  return result;
}

printName(student);