import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Select, Empty, Steps } from "antd";
import { StoreContext } from "../context";
import { cartItemAdd, cartItemRemove } from "../actions";

const { Option } = Select;
const { Step } = Steps;

export default function ShoppingDetail() {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(StoreContext);

  const getTotalPrice = () => {
    return cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : 0;
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Steps current={1}>
        <Step
          title="準備結帳"
          subTitle=""
        />
        <Step
          title="填寫資料"
          subTitle=""
          description="This is a description."
        />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
      </Steps>
      <div className="shoppingbag-text bg-yellow">購物清單</div>
      {cartItems.length === 0 ? (
        <Empty image="https://fireplace.tw/wp-content/themes/mrtailor/images/empty_cart_retina.png" description="請你去買一張電動桌" />
      ) : (
        cartItems.map((item) => (
          <li key={item.id} className="shoppingbag-item">
            <Link to={`/product/${item.id}`}>
              <div className="cart-image">
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
            <div className="cart-item-content">
              <div className="cart-name">{item.name}</div>
              <div className="product-qty">
                Qty: {"   "}
                <Select
                  defaultValue={item.qty}
                  className="select-style"
                  onChange={(qty) => cartItemAdd(dispatch, item, qty)}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <Option key={x + 1} value={x + 1}>
                      {x + 1}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="shoppingbag-item-end">
              <div className="shoppingbag-price">${item.price * item.qty}</div>
              <div
                className="shoppingbag-item-delete"
                onClick={() => cartItemRemove(dispatch, item.id)}
              >
                x
              </div>
            </div>
          </li>
        ))
      )}
      <div className="shoppingbag-total-price-wrap">
        Total
        <div className="shoppingbag-total-price">${getTotalPrice()}</div>
      </div>
      <Button className="shoppingbag-modal-btn" type="primary">
        <span style={{ marginLeft: 12 }}>Start Checkout</span>
      </Button>
    </>
  );
}
