const cartModel = require("../models/cartModel");

exports.createCart = async (req, res) => {
  try {
    let userId = req.user._id;
    let { products } = req.body;

    let result = await cartModel.create({ user: userId, products });

    if (result) {
      res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    res.status(200).json({ status: false, data: error.message });
  }
};

exports.cartList = async (req, res) => {
  try {
    let email = req.user.email;

    
  } catch (error) {
    res.status(200).json({ status: false, data: error.message });
  }
};

exports.removeCart = async (req, res) => {
  try {
    let id = req.params.id;

    let result = await cartModel.findByIdAndDelete(id);
    console.log(result);

    if (result) {
      res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    res.status(200).json({ status: false, data: error.message });
  }
};
