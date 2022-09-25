const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //   let name = req.query.name;

  const { name, age } = req.query;

  const response = `Welcome ${name ? name : "person"} and your age is ${
    age ? age : "unknown"
  }`;

  res.send(response);
});

app.listen(3000);
