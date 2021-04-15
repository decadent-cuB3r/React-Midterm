import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import AddToCart from './AddToCart'

export default function ProductItem({ product }) {
  return (
    <Card className="bg-gray product">
      <Link to={`/product/${product.id}`}>
        <img style={{ width: "100%" }} src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <span className="text-gray">NTD {product.price}</span>
      </div>
      <div className="product-functions">
        <AddToCart />
        <Link to={`/product/${product.id}`}>
          <Button type="ghost">More</Button>
        </Link>
      </div>
    </Card>
  );
}

