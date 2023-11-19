const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  let reqBody = req.body;
  try {
    let { name, email, password } = reqBody;
    let existUser = await userModel.findOne({ email });
    if (existUser) {
      res.status(200).json({ status: "matched", data: "User already exist" });
    } else {
      let result = await userModel.create({ name, email, password });
      res.status(200).json({ status: "success", data: result });
    }
  } catch (error) {
    res.status(200).json({ status: "failed", data: error.message });
  }
};

exports.login = async (req, res) => {
  let reqBody = req.body;
  try {
    let { email, password } = reqBody;
    pipeline = [{ $match: { email, password } }, { $project: { _id: 1, name: 1, email: 1 } }];
    let result = await userModel.aggregate(pipeline);
    console.log(result);
    if (result.length > 0) {
      let token = jwt.sign(
        {
          data: result[0][email],
        },
        "secret",
        { expiresIn: "1h" }
      );
      res.status(200).json({ status: "success", token, data: result });
    } else {
      res.status(200).json({ status: "unauthorized", data: result });
    }
  } catch (e) {
    res.status(200).json({ status: "failed", data: error.message });
  }
};
