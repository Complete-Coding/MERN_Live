// External Module
const express = require('express');

const app = express();

// First Middleware
app.use("/", (req, res, next) => {
  console.log('First Middleware', req.url, req.method);
  next();
});

app.use("/test", (req, res, next) => {
  console.log('Second Middleware', req.url, req.method);
  res.send('<h1>Complete Coding</h1>');
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});