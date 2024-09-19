const Product = require("../models/newProduct");

const handleGetProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsByID = async (req, res) => {
  const getProduct = await Product.findById(req.params.id);
  try {
    if (!getProduct) 
        return res.status(404).json({ message: "Item not found" });
    res.json(getProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postProducts = async (req, res) => {
  try {
    const savedProduct = await Product.create(req.body);
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProducts = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updateProduct)
      return res.status(404).json({ message: "Item not found" });
    const updatedProduct = await Product.findById(req.params.id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct)
      return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleGetProducts,
  getProductsByID,
  postProducts,
  updateProducts,
  deleteProductById,
};
