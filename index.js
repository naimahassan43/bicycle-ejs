const express = require("express");
const app = express();

const bicycles = require("./data/data.json");

app.set("view engine", "ejs");
app.use(express.static("public"));

//Home Page
app.get("/", (req, res) => {
  return res.render("bicycles", {
    bicycles,
  });
});

//Overview page
app.get("/bicycle", (req, res) => {
  const bicycle = bicycles.find((b) => b.id === req.query.id);
  return res.render("overview", {
    bicycle,
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
