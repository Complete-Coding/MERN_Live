function hello(name) {
    console.log('Hello ' + name);
}

// let hello = function(name) {
//     console.log('Hello ' + name);
// }

function capitalize(name) {
  let upper = name.toUpperCase();
  console.log(upper);
}

function processUserInput(process) {
  let studentName = prompt('Enter you name: ');
  process(studentName);
}

processUserInput(hello);
processUserInput(capitalize);