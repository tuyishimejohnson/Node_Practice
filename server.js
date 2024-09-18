const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/newProduct");
const bodyParser = require("body-parser");
require("dotenv").config();
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

app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  const getProduct = await Product.findById(req.params.id);
  try {
    if (!getProduct) return res.status(404).json({ message: "Item not found" });
    res.json(getProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newPro = new Product(req.body);
    const savedProduct = await newPro.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id);
    if (!updateProduct)
      return res.status(404).json({ message: "Item not found" });
    res.json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct)
      return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
