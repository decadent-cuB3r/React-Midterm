import { Card } from "antd";
import { Link } from "react-router-dom";

export default function ProductItem({product}) {
  return (
    <Card className="bg-gray product">
      <Link to={`/product/${product.id}`}>
        <img style={{ width: "100%" }} src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <div className="product-more">
          <span className="text-gray">NTD {product.price}</span>
        </div>
      </div>
    </Card>
  );
}
