const userModel = require("../models/userModel");

exports.register = async (req, res) => {
  let reqBody = req.body;
  try {
    let { email, password } = reqBody;
    let result = await userModel.create({ email, password });
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(200).json({ status: "failed", data: error.message });
  }
};

exports.login = (req, res) => {
  res.status(200).json({ message: "sucess" });
};
