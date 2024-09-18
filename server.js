/* const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/newProduct");
const bodyParser = require("body-parser");
require("dotenv").config();
const EventEmitter = require("events")
const emitter  = new EventEmitter()

emitter.on("messageLogged", () => {console.log("Message logged successfully")})
emitter.emit( "messageLogged")

console.log(emitter)

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

app.post("/products", async (req, res) => {
  try {
    const newPro = new Product(req.body);
    const savedProduct = await newPro.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
}); */

/* const http = require("http");
const fs = require("fs");
const myText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eius, voluptatem eaque, excepturi aliquid quibusdam tempore nihil magnam nisi incidunt ipsam! Excepturi laboriosam repellat quis possimus in aperiam nostrum reiciendis. The gym is intense!";
http
  .createServer((req, res) => {
    if(req.method === "GET" && req.url === "/input") {
        fs.readFile("input.txt", (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
    } else if(req.method === "POST" && req.url === "output.txt") {
        fs.writeFile(
          ("output.txt",
          myText,
          (error) => {
            if (error) {
              console.log("Error:" + error)
            };
            console.log("Data saved successfully!");
          })
        );
    }
    
  })
  .listen(3000, () => console.log("Listening on port 3000"));


function logger(req,res, next) {
  console.log("function logged successfully")
  next()
}
 */

