const fs = require('fs')

const bodyParser = require('body-parser')


const express = require('express')
const app = express()

app.use(bodyParser.urlencoded())

app.use((req, res, next) =>{
  console.log('1st Middleware',req.url,req.method,req.body)
  next()
})

app.use((req, res, next) =>{
  console.log('2nd Middleware',req.url,req.method,req.body)
  next()
})

app.get('/',(req, res, next) =>{

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form</title>
</head>
<body>
  <form action="/contact-us" method="POST">
    <label for="name">Name</label>
    <input type="text" name="fullname" required><br>
    <label for="email">Email</label>
    <input type="email" name="email" required><br>
    <input type="submit" value="submit">
  </form>
</body>
</html>`)
})

app.post('/contact-us', (req, res, next) => {
  fs.writeFile('data.json', JSON.stringify(req.body), (err) => {
    if (err) {
      return next(err);
    }
    
    res.statusCode = 302;
    res.setHeader('Location', '/user-data');
    res.end();
  });
});

app.get('/user-data',(req, res, next)=>{

  res.send(`<h1>Response is saved</h1>`)

})

app.use((req, res, next) =>{
  req.statuscode=404;
  res.write(`<h1>404 page not found...</h>`)
  res.end();
})

const PORT = 3001;
app.listen(PORT,()=>{
  console.log(`The server is running on http://localhost:${PORT}`)
})