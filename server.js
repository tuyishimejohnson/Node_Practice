const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/newProduct");
const bodyParser = require("body-parser");
require("dotenv").config();
const route = express.Router();
const productControllers = require("./controllers/handleControls");
/* const EventEmitter = require("events");
const emitter = new EventEmitter(); */
/* 
emitter.on("messageLogged", () => {
  console.log("Message logged successfully");
});
emitter.emit("messageLogged"); */

app.set("view engine", "ejs");
app.use(bodyParser.json());
const connectServer = process.env.MONGODB_URI;

mongoose
  .connect(connectServer)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => console.log("Captured some errors: " + error));

app.listen(3000, () => console.log("connected to the port 3000"));

app.get("/products", productControllers.handleGetProducts);
app.get("/products/:id", productControllers.getProductsByID);
app.post("/products", productControllers.postProducts);
app.put("/products/:id", productControllers.updateProducts);
app.delete("/products/:id", productControllers.deleteProductById);
