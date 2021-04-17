import { Button, notification } from "antd";

export default function AddToCart({product, qty}) {
  const openNotification = () => {
    notification.open({
      message: "購物車通知",
      description: `${qty} ${product.quantifier} ${product.name} 已加入購物車！`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  return (
    <Button type="default" onClick={openNotification}>
      加入購物車
    </Button>
  );
}
