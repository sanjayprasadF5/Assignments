const express = require("express");
const app = express();
const moment = require("moment");
const myArgs = process.argv;

console.log("myArgs: ", myArgs);

app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.get("/time", (req, res) => {
  let dateFormat = require("dateformat");
  let now = new Date();
  req.end(dateFormat(now, "yyyy-mm-dd'T'HH:MM:ss:l'Z'"));
});
console.log(process.env);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running${port}`);
});
