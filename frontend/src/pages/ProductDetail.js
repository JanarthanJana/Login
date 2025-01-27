import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const [product, setProduct] = useState(null); // State for product details
  const { id } = useParams(); // Get product ID from the URL
  const baseURL = "http://localhost:5000/uploads/";

  useEffect(() => {
    // Fetch product details using the API URL and product ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
        const data = await response.json();
        setProduct(data); // Set product data
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]); // Dependency array includes `id`

  if (!product) {
    // Show a loading message while the product data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container-fluid"
      style={{
        maxWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        className="row"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        {/* Product Image */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            className="img-fluid"
            src={`${baseURL}${product.image}`}
            alt={product.name || "Product Image"}
            style={{
              maxWidth: "90%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>

        {/* Product Details */}
        <div
          className="col-12 col-md-6"
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            {product.name || "Product Name"}
          </h1>
          <p id="product_id" style={{ fontSize: "16px", color: "gray" }}>
            Product ID: {product._id || "N/A"}
          </p>

          <hr />

          <p id="product_price" style={{ fontSize: "24px", fontWeight: "bold", color: "#27ae60" }}>
            RS.{product.price || "0.00"}
          </p>

          <hr />

          <h4>Description:</h4>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
            {product.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}
