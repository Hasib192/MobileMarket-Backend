const router = require("express").Router();

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");

const { verifyToken } = require("../helpers/jwt");

//! User Api
router.post("/register", userController.register);
router.post("/login", userController.login);

//! Product Api
router.post("/product/create", productController.createProduct);
router.get("/product/list", productController.productList);

//! Cart Api
router.post("/cart/add", verifyToken, cartController.createCart);
router.get("/cart/list", verifyToken, cartController.cartList);
router.post("/cart/remove/:id", verifyToken, cartController.removeCart);

module.exports = router;
