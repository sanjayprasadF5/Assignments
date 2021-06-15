const express = require("express");
const app = express();
const Fruits = require("./Fruits");

app.delete("/Fruits/", (req, res) => {
  inventory = [];
  if (inventory === null) {
    res.send("Delete request Failed");
  } else {
    res.send("Successfully deleted all items from the inventory");
  }
});

app.delete("/Fruits/:name", (req, res) => {
  const itemName = req.params.name;
  var item = Fruits.find((item) => item.name === itemName);
  if (!item) return res.status(404).json({ message: "Not Found" });
  var itemIndex = Fruits.indexOf(item);
  Fruits.splice(itemIndex, 1);
  res.json(Fruits);
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}`);
});
