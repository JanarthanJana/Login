const Product = require("../models/productModel");

// Add Product
exports.addProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const image = req.file ? req.file.filename : null;
        const product = await Product.create({ name, description, price, image });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
