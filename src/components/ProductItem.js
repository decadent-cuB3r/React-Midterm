import { Card, Button, notification } from "antd";
import { Link } from "react-router-dom";

const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

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
        <Button type="default" onClick={openNotification}>
          加入購物車
        </Button>
      </div>
    </Card>
  );
}
