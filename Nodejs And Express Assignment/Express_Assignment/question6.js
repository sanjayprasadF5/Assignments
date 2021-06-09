const express = require("express");
const app = express();

const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Server is run");
});
