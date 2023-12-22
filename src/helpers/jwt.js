const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  // console.log(header);
  try {
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
      if (error) {
        console.error(error.message);
        res.status(403).json({ status: false, data: error.message });
      } else {
        req.user = decoded.data[0];
        next();
      }
    });
  } catch (error) {
    res.status(401).json({ status: false, data: "Unauthorized" });
  }
};
