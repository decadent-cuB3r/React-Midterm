import { Link } from "react-router-dom";

export default function ProductImage({ product }) {
  return (
    <Link to="/product">
      <img
        className="process-image"
        style={{ width: "253px" }}
        src={product.image}
        alt={product.name}
      />{" "}
    </Link>
  );
}
