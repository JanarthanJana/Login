import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  // Base URL for images
  const baseURL = "http://localhost:5000/uploads/";

  // Default rating if not provided
  const rating = product.rating || 0;

  // Generate stars based on the rating
  const renderStars = () => {
    const totalStars = 5; // Maximum stars
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 >= 0.5; // Check if there's a half star
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    // Generate stars array
    const stars = [
      ...Array(fullStars).fill("★"), // Full stars
      ...(halfStar ? ["☆"] : []),   // Half star
      ...Array(emptyStars).fill("☆"), // Empty stars
    ];

    return stars.map((star, index) => (
      <span
        key={index}
        style={{
          color: star === "★" ? "#f8ce0b" : "#ccc", // Gold for filled, grey for empty
          fontSize: "18px",
        }}
      >
        {star}
      </span>
    ));
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        {/* Construct full image URL */}
        <img
          className="card-img-top mx-auto"
          src={`${baseURL}${product.image}`}
          alt={product.name || "Product Image"}
          style={{
            maxWidth: "100%",
            height: "150px",
            display: "block",
          }}
        />
        <div className="card-body d-flex flex-column text-center"> {/* Added text-center here */}
          <h5 className="card-title">
            <Link to={"/product/" + product._id}>{product.name.replace(/"/g, "")}</Link>
          </h5>

          <p className="card-text">RS.{product.price}</p>

          <Link to={"/product/" + product._id} id="view_btn" className="btn btn-warning">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
