const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const productSchema = new Schema(
  {
    title: String,
    short_des: String,
    price: Number,
    discount: Number,
    discount_price: Number,
    image: String,
    stock: String,
    star: String,
    remark: String,
  },
  { timestamps: true, versionKey: false }
);

const productModel = Model("Product", productSchema);

module.exports = productModel;
