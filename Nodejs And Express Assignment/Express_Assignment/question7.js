const express = require("express");
const app = express();
const shoppingList = require("./shoppingList");

app.use(express.json());
app.get("/items", function (req, res) {
  if (shoppingList) {
    res.send(shoppingList);
  } else {
    res.send("Item not found");
  }
});

app.post("/items", function (req, res) {
  console.log("You made a POST request: ", req.body);
  res.send({
    name: req.body.name,
    price: req.body.price,
    message: "added to list",
  });
});

app.get("/item/:name", function (req, res) {
  res.send(shoppingList.name);
  res.send(req.body);
});

app.patch("/items/:name", (req, res) => {
  name = req.params.name;
  if (name < shoppinglist.length) {
    if (req.body.name !== "") shoppinglist[name].item = req.body.name;
    if (req.body.price !== "") shoppinglist[id].price = req.body.price;
    res.send("Item is updated in the list");
  } else {
    res.send("Item not present in the list");
  }
});

app.delete("/items/:name", (req, res) => {
  name = req.params.name;
  if (id < shoppinglist.length) {
    shoppinglist.splice(name, 1);
    res.json(shoppinglist);
  } else {
    res.send("Item not present in the list");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
