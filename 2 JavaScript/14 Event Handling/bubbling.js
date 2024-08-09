const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

outer.addEventListener('click', () => {
  console.log('outer');
}, /*true*/); // pass true for capturing phase


inner.addEventListener('click', (event) => {
  console.log('inner');
  event.stopPropagation();
});