const fs = require("fs");

fs.readFile("anytxt11.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
