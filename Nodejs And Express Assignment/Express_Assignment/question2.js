const express = require("express");

const app = express();

const port = 3000;

app.get("/year", (req, res) => {
  let d = new Date();
  let n = d.getFullYear();
  res.send("You were born in " + (n - req.query.age));
});

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
