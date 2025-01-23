import React, { useState, useEffect } from "react";
import api from "../services/api"; // API service for fetching product data
import "./UserView.css";

const UserView = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products"); // API endpoint to fetch products
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-view-container">
      <h1>Product Gallery</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">
              <strong>${product.price}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserView;
