const express = require("express");

const bodyParser = require("body-parser");

const Fruits = require("./Fruits");

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.put("/Fruits/", (req, res) => {
  var newInventory = req.body;
  if (!newInventory) return res.status(404).json({ message: "Not Found" });
  inventory = newInventory;
  res.send(Fruits);
});

app.put("/Fruits/:name", (req, res) => {
  var itemName = req.params.name;
  var item = inventory.find((item) => item.name === itemName);
  if (!item) return res.status(404).json({ message: "Not Found" });
  if (req.body.name) {
    item.name = req.body.name;
  }
  if (req.body.quantity) {
    item.quantity = req.body.quantity;
  }
  res.json(item);
});
const port = process.env.PORT || 8081;

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
