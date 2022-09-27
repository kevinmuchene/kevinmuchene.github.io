const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

const path = require("path");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname));

app.get("/", (req, res) => {
  //   if (!res.cookies.items) {
  //     res.cookies.items = [];
  //   }
  //   console.log(req.cookies);
  let data = req.cookies;

  console.log(data);
  res.render("addCookie", { data });
});

app.post("/postcookie", (req, res, next) => {
  res.cookie(req.body.key, req.body.value);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
