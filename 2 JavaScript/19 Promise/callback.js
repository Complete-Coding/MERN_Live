//console.log('Checking Callback Hell');

function getDataFromInternet(successCallback) {
  console.log('Getting data from internet');
  setTimeout(() => {
    successCallback('KG Coding');
  }, 3000);
}

function setDataToDB(successCallback) {
  console.log('Sending data to DB');
  setTimeout(() => {
    successCallback('db_row_25');
  }, 2000);
}

function sendResponseToUser(successCallback) {
  console.log('Sending Response to User');
  setTimeout(() => {
    successCallback();
  }, 5000);
}

getDataFromInternet((data) => {
  console.log(`Data is fetched ${data}`);
  setDataToDB((id) => {
    console.log(`Data is saved in DB with id ${id}`);
    sendResponseToUser(() => {
      console.log('Response is sent to user');
    });
  })
});