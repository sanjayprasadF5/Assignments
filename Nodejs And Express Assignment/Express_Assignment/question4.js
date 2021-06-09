const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello World!");
});

const HOST = process.env.PORt || "localhost";
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, console.log(`server is running ${PORT}`));
