const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

exports.getData = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId).populate('orders');
  const products = await Product.find();
  res.status(200).json({products, cart: user.cart, orders: user.orders});
}

exports.addToCart = async (req, res, next) => {
  const productId = req.params.id;
  const userId = req.userId;
  const user = await User.findById(userId);
  user.cart.push(productId);
  await user.save();
  res.status(200).json(user.cart);
}

exports.removeFromCart = async (req, res, next) => {
  const productId = req.params.id;
  const userId = req.userId;
  const user = await User.findById(userId);
  user.cart = user.cart.filter(id => id.toString() !== productId);
  await user.save();
  res.status(200).json(user.cart);
}

exports.createOrder = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId).populate('cart');
  let totalAmount = 0;
  for (const product of user.cart) {
    totalAmount += product.price;
  }
  const order = new Order({products: user.cart, totalAmount, customer: userId});
  await order.save();
  user.orders.push(order._id);
  user.cart = [];
  await user.save();
  res.status(200).json(order);
}