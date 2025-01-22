const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
    const { name, email, password, isAdmin } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword, isAdmin });

    try {
        const createdUser = await user.save();
        res.status(201).json({
            id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
  }

  // Compare the provided password with the hashed password in the database
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate the JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

  // Return the user details and token in the response
  res.json({
      name: user.name,    // Include name
      email: user.email,  // Include email
      token: token        // Include token
  });
});


module.exports = router;
