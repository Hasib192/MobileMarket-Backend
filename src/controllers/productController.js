const productModel = require("../models/productModel");

exports.createProduct = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await productModel.create({ ...reqBody });
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "failed",
      data: error.message,
    });
  }
};

exports.productList = async (req, res) => {
  try {
    let result = await productModel.find({});
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "failed",
      data: error.message,
    });
  }
};
