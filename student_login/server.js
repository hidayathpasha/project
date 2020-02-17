const express = require("express");
const path = require("path");
const app = express();

app.engine("html", require("ejs").renderFile);

app.use(express.urlencoded({ extended: true }));

app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/login", (req, res) => {
  res.render("login.html");
});

app.get("/sign", (req, res) => {
  res.render("sign.html");
});

app.listen("1234", () => {
  console.log("connected");
});
