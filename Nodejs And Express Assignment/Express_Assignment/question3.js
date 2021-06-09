const express = require("express");
const app = express();
const myArgs = process.argv;

console.log(myArgs);

app.get("/", function (req, res) {
  res.send("Hello, world!");
});

app.listen(process.argv[2]);
