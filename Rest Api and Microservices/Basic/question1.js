const express = require("express");

const Fruits = require("./Fruits");

const app = express();

/*-----------------------------------------------------------------*/

//All Fruits
app.get("/api/Fruits", (req, res) => {
  res.send(Fruits);
});

//Get Single Fruit from the list
app.get("api/Fruits/:name", (req, res) => {
  var reqProduct = req.params.name;
  var product = Fruits.find((product) => product.name === reqProduct);
  if (product) {
    res.send(product);
  } else {
    res.send({ message: `Product ${reqProduct} doesn't exist` });
  }
});
//Port

const port = process.env.PORT || 3000;

// listen for requests
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
