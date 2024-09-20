const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const productControllers = require("./controllers/handleControls");
/* const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("writeMessage", () => {
  console.log("Message logged successfully");
});

emitter.on("error", (error) => console.error("Error occured", error))
emitter.emit("error", new Error("This is an error occured"))



emitter.addListener("writeMessage", (name) => {
  console.log(`${name}, write a message for them`)
})
emitter.emit("writeMessage", "Johnson"); */

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

app.get("/items", productControllers.handleGetItems);
app.get("/items/:id", productControllers.getItemsByID);
app.post("/items", productControllers.postItems);
app.put("/items/:id", productControllers.updateItems);
app.delete("/items/:id", productControllers.deleteItemById);
