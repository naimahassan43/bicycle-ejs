const express = require("express");
const app = express();

const bicycles = require("./data/data.json");
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/bicycle", (req, res) => {
  console.log(req.query.id);
  res.send("Bicycle");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
