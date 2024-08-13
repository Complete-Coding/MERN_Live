console.log("fetch.js");
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
// .then(function(response) {
//   return response.json();
// })
.then(json => console.log(json))
.catch(error => console.log(error));