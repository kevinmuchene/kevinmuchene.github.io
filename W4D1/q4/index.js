const express = require("express");

const app = express();

const path = require("path");

const session = require("express-session");

app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname, "css")));

app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
    resave: false,
  })
);

app.use((req, res, next) => {
  if (!req.session.items) {
    req.session.items = {};
  }
  next();
});

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();

  const cssStyle = hour >= 6 && hour <= 18 ? "day.css" : "night.css";

  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Express | Form</title>
        <link rel="stylesheet" href="/css/${cssStyle}">
    </head>
    <body>
        <form action="/result" method="POST">
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
            <label for="age">Age</label>
            <input type="text" name="age" id="age">
            <input type="submit" value="Submit Query">
        </form>
    </body>
    </html>`);
});

app.get("/output", (req, res) => {
  const { name, age } = req.session.items;
  const response = `Welcome ${name ? name : "person"} and your age is ${
    age ? age : "unknown"
  }`;

  res.send(response);
});

app.post("/result", (req, res) => {
  const { name, age } = req.body;

  req.session.items.name = name;
  req.session.items.age = age;
  res.redirect("/output");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
