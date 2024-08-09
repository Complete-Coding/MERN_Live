console.log('Events');

let clickHandler = () => {
  console.log('Button clicked');
}

let buttonClickHandler = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

let button = document.getElementById('myButton');
// Using Event Handler
// button.onclick = buttonClickHandler;
// button.onclick = clickHandler;

// Using event listener
button.addEventListener('click', clickHandler);
button.addEventListener('click', clickHandler);
button.addEventListener('click', buttonClickHandler);
button.removeEventListener('click', clickHandler);