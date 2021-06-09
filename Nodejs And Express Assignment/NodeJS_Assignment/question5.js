var fs = require("fs");

fs.readFile("readme.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  //let occurenceArray = data.split("\n");
  let occurenceArray = data.match("john");

  if (occurenceArray === null || occurenceArray.length <= 0) {
    console.log(0);
  } else {
    console.log(occurenceArray.length);
  }
});
console.log("yaahoooo");
