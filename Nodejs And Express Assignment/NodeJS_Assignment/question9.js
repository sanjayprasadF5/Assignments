//Question 9

const concat = require("concat-stream");
const fs = require("fs");
const path = require("path");

const arrayData = concat(
  fs.readFile("local.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  })
);
console.log(arrayData);
