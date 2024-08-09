let student1 = {
  name: 'Ram',
  age: 17,
  course: 'IT',
  roll: 1,
  printName() {
    console.log(this.name);
  },
}

let student2 = {
  name: 'Shyam',
  age: 18,
  course: 'CSE',
  roll: 2,
}

// function Student(name, age, course, roll) {
//   this.name = name;
//   this.age = age;
//   this.course = course;
//   this.roll = roll;

//   this.printName = function() {
//     console.log(this.name);
//   }
// }

class Student {
  constructor(name, age, course, roll) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.roll = roll;
  }

  printName() {
    console.log(this.name);
  }
}

let student3 = new Student('Hari', 19, 'IT', 3);

console.log(student1);
console.log(student2);
console.log(student3);

let student4 = new Student('Gita', 20, 'CSE', 4);
console.log(student4);

student1.printName();
//student2.printName();
student3.printName();
student4.printName();