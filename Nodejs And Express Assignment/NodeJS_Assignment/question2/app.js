const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
  // Display the file content
  console.log(data);
});
