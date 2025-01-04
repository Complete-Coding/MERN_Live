const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path  = require('path')
const rootDir = require('./utils/path-utils')
const {hostRouter} = require('./Routers/hostRouter');
const { storeRouter } = require('./Routers/storeRouter');


app.set('view engine', 'ejs');
app.set('views', 'views')


app.use(express.static(path.join((rootDir,"public"))))
app.use(bodyParser.urlencoded({extended : true}));



app.use(storeRouter)
app.use('/host/',hostRouter)

app.use((req, res, next) =>{
  res.status(404).send(`<html>
    <body>
    <h1> 404 | Page not found!!!!
    </body>
    </html>`)
})


const PORT = 3001;
app.listen(PORT,()=>{
  console.log(`The Server is running on http://localhost:${PORT}`)
})