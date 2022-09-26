const express = require("express");

const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send(
    "<form action='/result' method='POST'>" +
      "<label for='name'>Name</label>" +
      "<input type='text' id='name' name='name'>" +
      "<label for='age'> Age </label>" +
      "<input type='text' name='age' id='age'>" +
      "<input type='submit' value='Submit Query'> " +
      "</form>"
  );
});

app.post("/result", (req, res) => {
  //   console.log(req.body);

  const { name, age } = req.body;

  const response = `Welcome ${name ? name : "person"} and your age is ${
    age ? age : "unknown"
  }`;

  res.send(response);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
