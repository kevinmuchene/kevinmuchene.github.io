const express = require("express");

const app = express();

const path = require("path");
app.use(express.urlencoded({ extedend: false }));
app.use("/css", express.static(path.join(__dirname, "css")));

// app.use(express.static("css"));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();

  console.log(path.join(__dirname, "css"));

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

app.post("/result", (req, res) => {
  const { name, age } = req.body;
  const response = `Welcome ${name ? name : "person"} and your age is ${
    age ? age : "unknown"
  }`;

  res.send(response);
});

app.listen(3000, () => {
  console.log("Listening on port 3000 please");
});
