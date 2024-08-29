const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const str =
  "mongodb+srv://johnsontuyishime:noe321@backenddb.47qrz.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

mongoose
  .connect(str)
  .then((result) => console.log("connected to db: " + result))
  .catch((error) => console.log("Captured some errors: " + error));
app.set("view enging", "ejs");

app.get("/", (req, res) => {
  console.log("Here we are");
  res.render("about.ejs");
});

app.get("/users", (req, res) => {
  res.send("<h1>This is the users list</h1>");
});
app.get("/usersid", (req, res) => {
  res.send("<h1>This is the users identities</h1>");
});

app.get("/:id", (req, res) => {
  res.send(`We got the id ${req.params.id}`);
});

app.listen(3000);
