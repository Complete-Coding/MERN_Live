// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const hostRouter = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require('./util/path-util');

const app = express();

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(storeRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
