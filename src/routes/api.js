const router = require("express").Router();

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

// User Api
router.post("/register", userController.register);
router.post("/login", userController.login);

// Product Api
router.post("/product/create", productController.createProduct);

module.exports = router;
