
function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
}

async function getUsers() {
  console.log('Inside getUsers');
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

getUsers();