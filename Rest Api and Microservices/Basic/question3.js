const express = require("express");

const bodyParser = require("body-parser");

const Fruits = require("./Fruits");

const app = express();

app.post("/Fruits/", (req, res) => {
  var newItem = req.body;
  if (newItem) {
    Fruits.push(newItem);
    res.send("Item added to inventory successfully.");
  } else {
    res.send("Couldn't add item to inventory");
  }
});
const port = process.env.PORT || 8081;

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
