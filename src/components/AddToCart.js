import { Button, notification } from "antd";

const openNotification = () => {
    notification.open({
      message: "購物車通知",
      description: "一台電動麻將桌到府安裝！",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

export default function AddToCart(){
    return (
        <Button type="default" className="btn-color" onClick={openNotification}>
          加入購物車
        </Button>
    );
}