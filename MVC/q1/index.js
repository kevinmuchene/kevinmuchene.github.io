const express = require("express");

const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  const cssStyle = hour >= 6 && hour <= 18 ? "day.css" : "night.css";
  res.render("index", {
    time: date.toTimeString(),
    cssStyle,
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
