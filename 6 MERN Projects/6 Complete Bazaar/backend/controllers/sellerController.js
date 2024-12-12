const Product = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  const {name, brand, price, description, category, rating} = req.body;
  const sellerId = req.userId;

  if (!req.file) {
    return res.status(400).json({message: "No image provided"});
  }
  const imageUrl = req.file.path;

  try {
    const product = new Product({name, brand, price, description, category, rating, imageUrl, seller: sellerId});
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

exports.getProducts = async (req, res, next) => {
  const sellerId = req.userId;
  const products = await Product.find({seller: sellerId});
  res.status(200).json(products);
}

exports.deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  await Product.findByIdAndDelete(productId);
  res.status(200).json({productId});
}