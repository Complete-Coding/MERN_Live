const Product = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  const {name, brand, price, description, category, rating} = req.body;

  if (!req.file) {
    return res.status(400).json({message: "No image provided"});
  }
  const imageUrl = req.file.path;

  try {
    const product = new Product({name, brand, price, description, category, rating, imageUrl});
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
