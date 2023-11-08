const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const userModel = model("User", userSchema);

module.exports = userModel;
