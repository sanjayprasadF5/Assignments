const express = require("express");
const fs = require("fs");
const port = process.argv[2];
const filename = process.argv[3];

const app = express();

app.get("/books", (req, res) => {
  fs.readFile(sample, (err, data) => {
    let object;

    object = JSON.parse(data);
    res.json(object);
  });
});

app.listen(port);
console.log("Listening to port " + port);
