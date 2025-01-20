const express = require("express");
const { protect, admin } = require("../middlewares/authMiddleware");
const { addProduct, getProducts } = require("../controllers/productController");

const router = express.Router();

router.route("/")
    .post(protect, admin, addProduct)
    .get(getProducts);

module.exports = router;
