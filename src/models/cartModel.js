const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, versionKey: false }
);

const cartModel = Model("Cart", cartSchema);
module.exports = cartModel;
