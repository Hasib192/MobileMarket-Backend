const cartModel = require("../models/cartModel");
const mongoose = require("mongoose");

exports.createCart = async (req, res) => {
  try {
    let userId = req.user._id;
    let { product } = req.body;

    let result = await cartModel.create({ user: userId, product });

    if (result) {
      res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    res.status(200).json({ status: false, data: error.message });
  }
};

exports.cartList = async (req, res) => {
  try {
    let userId = new mongoose.Types.ObjectId(req.user._id);

    let result = await cartModel.aggregate([
      { $match: { user: userId } },
      {
        $lookup: {
          from: "products",
          localField: "products",
          foreignField: "_id",
          as: "selected_products",
        },
      },
      {
        $project: {
          selected_products: 1,
        },
      },
    ]);
    res.status(200).json({ status: true, data: result });
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
