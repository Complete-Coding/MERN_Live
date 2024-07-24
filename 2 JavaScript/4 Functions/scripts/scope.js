function learningScope() {
  console.log('Learning var');
  console.log('x:', x);
  var x = 10;
  console.log('x:', x);

  console.log('y:', y);
  let y = 5;
  console.log('y:', y);
}
learningScope();

function testGlobal() {
  global = 22;
  console.log('global:', global);
  global = 44;
  console.log('global:', global);
}

// testGlobal();
// console.log('global:', global);

function testVar() {
  var pop = 88;
  console.log('pop:', pop);
  var pop = 99;
  console.log('pop:', pop);
}

// testVar();
// console.log('pop:', pop);