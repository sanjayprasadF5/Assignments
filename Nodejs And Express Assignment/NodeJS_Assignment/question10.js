const fs = require("fs");
const path = require("path");
var context = "hey ho lets go";
fs.writeFile("myText.txt", context, (err) => {
  if (err) throw err;
  console.log("File written to...");
});
