const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    unit: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

const cartModel = model("Cart", cartSchema);
module.exports = cartModel;
