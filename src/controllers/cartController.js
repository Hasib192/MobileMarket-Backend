const cartModel = require("../models/cartModel");
const mongoose = require("mongoose");

exports.addToCart = async (req, res) => {
  try {
    const user = req.user._id;
    const { product, unit } = req.body;

    const filter = { user, product };
    const update = { unit };

    const result = await cartModel.findOneAndUpdate(filter, update, { new: true, upsert: true });

    if (result) {
      res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    res.status(200).json({ status: false, data: error.message });
  }
};

exports.cartList = async (req, res) => {
  try {
    const user = new mongoose.Types.ObjectId(req.user._id);

    const result = await cartModel.find({ user }).populate("product", "title price image discount_price -_id").select("unit");

    res.status(200).json({ status: true, data: result });
  } catch (error) {
    res.status(200).json({ status: false, data: error.message });
  }
};

exports.removeCartItem = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await cartModel.findByIdAndDelete(id);

    if (result) {
      res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    res.status(200).json({ status: false, data: error.message });
  }
};
