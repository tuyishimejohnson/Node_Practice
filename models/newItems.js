const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("Product", itemSchema);
module.exports = productModel;
