const express = require("express");
const multer = require("multer");
const path = require("path"); // <-- Add this line to require 'path'
const { protect, admin } = require("../middlewares/authMiddleware");
const { addProduct, getProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Directory for saving the images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Using 'path.extname' to get the file extension
    },
});

const upload = multer({ storage: storage });

// Routes for products
router.route("/")
    .post(protect, admin, upload.single("image"), addProduct)
    .get(getProducts);

router.route("/:id")
    .get(getProductById)
    .put(protect, admin, upload.single("image"), updateProduct)
    .delete(protect, admin, deleteProduct);

module.exports = router;
