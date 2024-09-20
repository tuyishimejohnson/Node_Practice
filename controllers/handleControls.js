const Item = require("../models/newItems");

const handleGetItems = async (req, res) => {
  try {
    const allItems = await Item.find();
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemsByID = async (req, res) => {
  const getItem = await Item.findById(req.params.id);
  try {
    if (!getItem) return res.status(404).json({ message: "Item not found" });
    res.json(getItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postItems = async (req, res) => {
  try {
    const savedItem = await Item.create(req.body);
    res.status(200).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateItems = async (req, res) => {
  try {
    const updateItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updateItem)
      return res.status(404).json({ message: "Item not found" });
    const updatedItem = await Item.findById(req.params.id);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteItemById = async (req, res) => {
  try {
    const deleteItem = await Item.findByIdAndDelete(req.params.id);
    if (!deleteItem)
      return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleGetItems,
  getItemsByID,
  postItems,
  updateItems,
  deleteItemById,
};
