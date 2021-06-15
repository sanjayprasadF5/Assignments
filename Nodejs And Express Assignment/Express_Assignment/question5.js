const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use("/style", express.static("/style.css"));
app.get("/form", function (request, response) {
  response.sendFile("/form.html");
});

app.post("/form", urlencodedParser, function (req, res) {
  res.end(
    req.body.firstname.split("").reverse().join("") +
      "\n" +
      req.body.lastname.split("").reverse().join("")
  );
});
console.log(process.env);
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Example app listening on port " + PORT + "!");
});
