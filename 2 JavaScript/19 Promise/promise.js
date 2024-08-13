// function getDataFromInternet(successCallback) {
//   console.log('Getting data from internet');
//   successCallback('KG Coding');
// }

// getDataFromInternet((data) => {
//   console.log(`Data is fetched ${data}`);
// });

function getDataFromInternetUsingPromise() {
  return new Promise((resolve, reject) => {
    console.log('Getting data from internet using Promise');
    for(let i = 0; i < 10000; i++);// console.log(i);
    resolve('KG Coding');
    //reject('Internet Timeout');
  });
}

getDataFromInternetUsingPromise()
.then((data) => {
  console.log(`Data is fetched ${data}`);
})
.catch((error) => {
  console.log(`Error: ${error}`);
})
.finally(() => {
  console.log('Finally block');
});
