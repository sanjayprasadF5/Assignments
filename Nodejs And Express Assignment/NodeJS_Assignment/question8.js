const fs = require("fs");
const path = require("path");
const numberData = fs.readFile(
  path.join(__dirname, "number.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
console.log(numberData);

const arrayNumber = parseInt(numberData.split("\n"));
arrayNumber.forEach((number) => {
  sum += number;
});

console.log(`Array of numbers: ${arrayNumber}`);
